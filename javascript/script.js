$(function() {
  const shrinkNav = () => {
    const scrollDistance = $(document).scrollTop();

    if (scrollDistance > 100) {
      $('header').addClass('scrolled-header');
      $('.to').css('font-size', '3.5rem');
      $('.wit').css('font-size', '1.3rem');
    } else {
      $('header').removeClass('scrolled-header');
      $('.to').css('font-size', '5rem');
      $('.wit').css('font-size', '1.7rem');
    }
  };

  $(document).on('scroll', shrinkNav);
});
