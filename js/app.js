(function($) {

  $(function() {
    
    // Initialize FastClick from FT Labs:
    // eliminates the 300ms delay between a physical tap and the firing of a
    // click event on mobile browsers
    new FastClick(document.body);

    // Add toggle to show/hide card back when card is clicked
    $('.cards li').toggle(
      function () {
        $(this).addClass('card-hover');
      },
      function () {
        $(this).removeClass('card-hover');
      }
    );

    $('.cards li').hover(
      function () {
        $(this).addClass('card-hover');
      },
      function () {
        $(this).removeClass('card-hover');
      }
    );

    // Choose between standard images or retina images, depending on device
    picturefill();

    // Once img elements have been added to the DOM by Picturefill, launch the
    // async image loader for card images
    $('.card-image img').jail();

  });

})(jQuery);