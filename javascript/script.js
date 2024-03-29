// Shrink header nav on scroll
$(function () {
  const shrinkNav = () => {
    const scrollDistance = $(document).scrollTop()
    if (scrollDistance > 25) {
      $("header").addClass("scrolled-header");
      $(".logo").css({ "height": "65px", "width": "65px" });
      $(".wrapper>.nav-right").css("padding-top", "5px");
      $(".scroll-direction").fadeOut();
    } else {
      $("header").removeClass("scrolled-header");
      $(".logo").css({ "height": "90px", "width": "90px" });
      $(".wrapper>.nav-right").css("padding-top", "9px");
      $(".scroll-direction").fadeIn();
      $(".logo a >.red").text("toronto/");
      $(".logo a >.white").text("advocacy");
    }
  };

  const moveBackground = () => {
    const scrollDistance = $(document).scrollTop()
    const windowHeight = $('body').height()
    const scrollPercent = scrollDistance / windowHeight
    console.log('scrollPercent', scrollPercent)

    if (0.12 < scrollPercent && scrollPercent < 0.5) {
      $('.landscape').css({ left: '-300px' })
      // $('.landscape').animate({left:'-300px'},300,'swing')  
    } else {
      $('.landscape').css({ left: '300px' })
      // $('.landscape').animate({left:'300px'},300,'swing')
    }
  }

  const showNavItems = () => {
    $(".menu-items ul").css({ opacity: "1" });
    // setTimeout(() => {
    //   $('.search-bar').addClass('show-underline');
    // }, 400);
    // setTimeout(() => {
    //   $('.search-bar input').css({ opacity: '1' });
    // }, 700);
  };

  const hideNavItems = () => {
    // $('.search-bar input').css({ opacity: '0' });
    // setTimeout(() => {
    //   $('.search-bar').removeClass('show-underline');
    // }, 500);
    // setTimeout(() => {
    $(".menu-items ul").css({ opacity: "0" });
    // }, 100);
  };

  const openNavMenu = () => {
    $(".nav-menu").show();
    $("section > *").not("canvas").addClass("hide");
    $("nav > .nav-right").removeClass("open-menu");
    $("nav > .nav-right").addClass("close-menu");
    // $(".bars").removeClass("bars-inactive");
    // $(".bars").addClass("bars-active");
    $(".menu-icon").addClass("active");
    $(".menu").fadeOut(50, function () {
      $(this).text("Close").fadeIn(50);
    });
    setTimeout(showNavItems, 200);
  };

  const closeNavMenu = () => {
    hideNavItems();
    setTimeout(function () {
      $(".nav-menu").hide();
      $("section > *").removeClass("hide");
      $("nav > .nav-right").removeClass("close-menu");
      $("nav > .nav-right").addClass("open-menu");
      // $(".bars").addClass("bars-inactive");
      // $(".bars").removeClass("bars-active");
      $(".menu-icon").removeClass("active");
      $(".menu").fadeOut(50, function () {
        $(this).text("Menu").fadeIn(50);
      });
    }, 700);
  };

  // const highlightSearch = () => {
  //   $('.search-bar').addClass('highlight-search');
  // };

  // const unhighlightSearch = () => {
  //   $('.search-bar').removeClass('highlight-search');
  // };

  const openTooltip = () => {
    $(".tooltip-first").show().focus();
  };

  const expandTooltip = () => {
    if (window.innerWidth <= 380) {
      $("header").addClass("scrolled-header");
      $(".to").css("font-size", "3.5rem");
      $(".wit").css("font-size", "1.3rem");
      $(".wrapper>.nav-right").css("padding-top", "5px");
    }

    $(".tooltip-first").hide();
    $(".tooltip-second").show().focus();
  };

  const closeTooltipFast = (event) => {
    $(".tooltip").focusout().fadeOut();
    event.stopImmediatePropagation();
  };

  // const closeTooltipSlow = (event) => {
  //   fadeOutTooltipHandler = setTimeout(() => {
  //     $('.tooltip').focusout().fadeOut()
  //   },3000)
  //   event.stopImmediatePropagation()
  // }

  // const stopCloseTooltipSlow = () => {
  //   clearTimeout(fadeOutTooltipHandler)
  //   fadeOutTooltipHandler = null
  // }

  const showScrollButton = () => {
    const scrollDistance = $(document).scrollTop();

    if (scrollDistance > 25) {
      $(".scroll-top").show();
    } else {
      $(".scroll-top").hide();
    }
  };

  const scrollToTop = () => {
    $(window).scrollTop(0);
  };

  const handleMore = (e) => {
    if ($(e.target).siblings(".dots").is(":visible") === false) {
      $(e.target).siblings(".dots").show("fast");
      $(e.target).html("Read more");
      $(e.target).siblings(".more").hide("fast");
    } else {
      $(e.target).siblings(".dots").hide("fast");
      $(e.target).html("Read less");
      $(e.target).siblings(".more").show("fast");
    }
  };

  const handleScroll = () => {
    // moveBackground()
    shrinkNav()
    showScrollButton()
  }

  // $('.landscape').css({left:'300px'})
  $('.fade-in-content').fadeIn('slow');
  $(document).on("scroll", handleScroll);
  $("nav").on("keypress click", ".open-menu", openNavMenu);
  $("nav").on("keypress click", ".close-menu", closeNavMenu);
  // $('.search-bar input').focus(highlightSearch);
  // $('.search-bar input').focusout(unhighlightSearch);
  $(".landscape").css("opacity", "1");

  var fadeOutTooltipHandler = null;
  $(".tooltip-open").on("mouseover tap click", openTooltip);
  // $('.tooltip-open').on('mouseleave',closeTooltipSlow)
  // $('.section-content').on('tap','.tooltip-open',openTooltip)
  // $('.section-content').on('keypress','.tooltip-open',openTooltip)

  $(".tooltip-expand").on("keypress tap click", expandTooltip);
  // $('.tooltip').on('mouseover',stopCloseTooltipSlow)
  // $('.tooltip').on('mouseleave',closeTooltipSlow)
  // $('.tooltip .tooltip-expand .tooltip-open').not().on('click tap',closeTooltipFast)
  $(document).on("scroll", closeTooltipFast);

  $(".scroll-top").on("click", scrollToTop);
  $(".text").on("click", ".read-more", handleMore);

  // Logic for collapsible divs
  $('#vision-title').on('click', (e) => {
    $('#vision-description').slideToggle();
    $(e.currentTarget).find('i').toggleClass('open')
  })

  $('#mission-title').on('click', (e) => {
    $('#mission-description').slideToggle();
    $(e.currentTarget).find('i').toggleClass('open')
  })

  $('#values-title').on('click', (e) => {
    $('#values-description').slideToggle();
    $(e.currentTarget).find('i').toggleClass('open')
  })

  // Logic for profile cards
  $('.read-more').on('click', (e) => {
    $(e.currentTarget).parent().removeClass("slide-down");
    $(e.currentTarget).parent().addClass("slide-up");
    $(e.currentTarget).siblings('.exit').css({
      display: 'block'
    });
    $(e.currentTarget).siblings('.extra-text').css({
      display: 'block'
    })
    $(e.currentTarget).css({
      display: 'none'
    });

  })

  $('.exit').on('click', (e) => {
    $(e.currentTarget).parent().removeClass("slide-up");
    $(e.currentTarget).parent().addClass("slide-down");
    $(e.currentTarget).css({
      display: 'none'
    });
    $(e.currentTarget).siblings('.extra-text').css({
      display: 'none'
    });
    $(e.currentTarget).siblings('.read-more').css({
      display: 'block'
    })
  })

  $('footer .year').text(new Date().getFullYear())
});


