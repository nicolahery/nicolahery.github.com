module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    // Project metadata
    meta: {
      // Put banner with project name on top of concatenated files
      banner: '/*! nicolashery.com | <%= grunt.template.today("yyyy-mm-dd") %> */'
    },

    // Compile jade templates to html
    jade: {
      // Use links to development assets
      dev: {
        src: ['jade/*.jade'],
        dest: '.',
        options: {
          client: false,
          pretty: true,
          env: 'development'
        }
      },
      // Use links to production assets
      prd: {
        src: ['jade/*.jade'],
        dest: '.',
        options: {
          client: false,
          pretty: true,
          env: 'production'
        }
      }
    },

    // Compile sass files to css using Compass
    compass: {
      style: {
        src: 'sass',
        dest: 'css',
        outputstyle: 'expanded',
        linecomments: false
      }
    },

    // Watch all source files and compile when changed, use for development
    watch: {
      files: ['jade/*.jade', 'sass/*.scss'],
      tasks: 'jade:dev compass'
    },

    // Concatenate files
    concat: {
      app: {
        src: ['<banner:meta.banner>',
              'js/vendor/jquery.js',
              'js/vendor/fastclick.js',
              'js/vendor/picturefill.js',
              'js/vendor/jail.js',
              'js/app.js'],
        dest: 'build/app.js'
      },
      style: {
        src: ['<banner:meta.banner>',
              'css/style.css'],
        dest: 'build/style.css'
      }
    },

    // Minify js files
    min: {
      app: {
        src: ['<config:concat.app.dest>'],
        dest: 'build/app.min.js'
      },
    },

    // Minify css files
    cssmin: {
      style: {
        src: ['<config:concat.style.dest>'],
        dest: 'build/style.min.css'
      }
    }

  });

  // Load tasks from NPM packages
  grunt.loadNpmTasks('grunt-jade'); // https://github.com/phated/grunt-jade
  grunt.loadNpmTasks('grunt-compass'); // https://github.com/kahlil/grunt-compass
  grunt.loadNpmTasks('grunt-css'); // https://github.com/jzaefferer/grunt-css

  // Default task: build deployment
  grunt.registerTask('default', 'jade:prd compass concat min cssmin');
  // Compile development assets
  grunt.registerTask('dev', 'jade:dev compass');

};