$(function() {
  const shrinkNav = () => {
    const scrollDistance = $(document).scrollTop();

    if (scrollDistance > 100) {
      $('header').addClass('scrolled-header');
      $('.to').css('font-size', '3.5rem');
      $('.wit').css('font-size', '1.3rem');
      $('.wrapper>.nav-right').css('padding-top', '5px');
    } else {
      $('header').removeClass('scrolled-header');
      $('.to').css('font-size', '5rem');
      $('.wit').css('font-size', '1.7rem');
      $('.wrapper>.nav-right').css('padding-top', '9px');
    }
  };
  
  // Displays the nav-menu div on nav-right click
  const toggleNavMenu = () => {
    console.log('toggling!')
    $('.nav-menu').toggle()
    $('section > *').toggleClass('hide')
    $('nav > .nav-right').toggleClass('hide')
  };

  $(document).on('scroll', shrinkNav);
  $('.nav-right').on('click', toggleNavMenu) 

});
