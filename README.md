# nicolahery.github.com

This repository contains the code that runs my personal web page.

It is a very simple satic site, but it does have a couple features worth mentioning I think.

## Card-based grid

The site is fully responsive, and the grid I built is fixed-width, with the smallest element being the width of a card.

The grid collapses as the screen gets smaller, with different break points: the number of cards per row diminishes, the sidebar collapses, and when the screen gets smaller than the width of one card, the layout becomes fluid.

I can easily change the settings of this grid thanks to [Sass](http://sass-lang.com/). Feel free to take a look at the code for more information: [sass/_cards.scss](/nicolahery/nicolahery.github.com/blob/master/sass/_cards.scss).

## FastClick

On a desktop, you just need to put the mouse over a card to reveal the back. On touch screens however, you need to tap the card to do so.

The problem is that "clicking" (one tap) on a touch screen has a 300ms delay, because the device is waiting to see if you are going to double-tap (zooming). This makes the site feel less snappy.

[FT Labs](http://labs.ft.com/) put together a small JS library that eliminates this 300ms delay, [FastClick](https://github.com/ftlabs/fastclick) and I used it to make the mobile experience much better.

## Retina-ready images

As part of striving to make this site look good on any screen, I conditionally serve double resolution images for retina-display devices, and standard resolution images for other devices.

To do this, I make use of [Scott Jehl](http://scottjehl.com/)'s [Picturefill](https://github.com/scottjehl/picturefill) library. I tweaked it a little to make it compatible with the asynchronous image loading library.

## Asynchronous image loading

To speed up the page load time, and since you don't see all the cards at once (especially on mobile), I decided to load the card images only once the card appears on the screen. I used [Sebastiano](http://www.sebastianoarmelibattana.com/)'s [JAIL](http://www.sebastianoarmelibattana.com/projects/jail) library for this.

## Jade

I use the [Jade](http://jade-lang.com/) templating engine to write out the site, and then I compile HTML files from it. I like Jade for this because it is not verbose and I don't have to write all those HTML tags.

But when (if) I start a blog, I'll convert the site to a [Jekyll](https://github.com/mojombo/jekyll) site.

## To build the site

Requirements:

- [Node.js](http://nodejs.org/) with [Grunt](http://gruntjs.com/)
- [Ruby](http://www.ruby-lang.org/) with [Compass](http://compass-style.org/)

Install Grunt and Compass:

```
$ npm install grunt -g
$ gem install compass
```

In project directory, install dependencies:

```
$ cd nicolahery.github.com/
$ npm install
```

For development, run:

```
$ grunt dev
$ grunt watch
```

To build the site for production:

```
$ grunt
```
