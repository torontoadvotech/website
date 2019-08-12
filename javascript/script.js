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
  
  // Shows the nav-menu items
  const showNavItems = () => {
    // 1) Show list
    $('.menu-items ul').css( {'opacity': '1'} )
    // 2) Show search-bar line
    setTimeout(()=> {
      $('.search-bar').addClass('show-underline')
    }, 400)
    // 3) Show search-bar text + magnifying glass
    setTimeout(() => {
      $('.search-bar input').css( {'opacity':'1'} )
    }, 700)
  }; // function ends
  
  // Hides the nav-menu items
  const hideNavItems = () => {
    // 1) Hide search-bar text + magnifying glass
    $('.search-bar input').css({ 'opacity': '0' })
    // 2) Hide search-bar line
    setTimeout(()=> {
      $('.search-bar').removeClass('show-underline')
    }, 500)
    // 3) Hide list
    setTimeout(() => {
      $('.menu-items ul').css({'opacity': '0'})
    }, 800)
  }; // function ends
  
  // Displays the nav-menu div on open-menu click
  const openNavMenu = () => {
    $('.nav-menu').show()
    $('section > *').addClass('hide')
    $('nav > .nav-right').addClass('hide')
    
    setTimeout(showNavItems, 300)
  }; // function ends
  

  // Closes the nav-menu div on close-menu click
  const closeNavMenu = () => {
    hideNavItems()

    setTimeout(function(){
      $('.nav-menu').hide()
      $('section > *').removeClass('hide')
      $('nav > .nav-right').removeClass('hide')
    }, 1400)

  }; // function ends

  $(document).on('scroll', shrinkNav);
  $('.open-menu').on('click', openNavMenu) 
  $('.close-menu').on('click', closeNavMenu) 
  
});
