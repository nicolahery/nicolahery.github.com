(function($) {

  // On DOM ready
  $(function() {
    
    // Initialize FastClick from FT Labs:
    // eliminates the 300ms delay between a physical tap and the firing of a
    // click event on mobile browsers
    new FastClick(document.body);

    // Add toggle to show/hide card back when card is clicked or hovered
    $('.cards li').click(function (e) {
      // Don't hide card back if user clicked on a link
      if (e.target.nodeName !== 'A') {
        $(this).toggleClass('card-hover');
      }
    });

    $('.cards li').mouseenter(function () {
      $(this).addClass('card-hover');
    });

    $('.cards li').mouseleave(function () {
      $(this).removeClass('card-hover');
    });

    // Choose between standard images or retina images, depending on device
    picturefill();

    // Once img elements have been added to the DOM by Picturefill, launch the
    // async image loader for card images
    $('.card-image img').jail();

  });

})(jQuery);