// Shrink header nav on scroll
$(function () {
  const shrinkNav = () => {
    const scrollDistance = $(document).scrollTop();

    if (scrollDistance > 25) {
      $("header").addClass("scrolled-header");
      $(".logo").css({"height": "65px", "width": "65px"});
      $(".wrapper>.nav-right").css("padding-top", "5px");
      $(".scroll-direction").fadeOut();
    } else {
      $("header").removeClass("scrolled-header");
      $(".logo").css({"height": "100px", "width": "100px"});
      $(".wrapper>.nav-right").css("padding-top", "9px");
      $(".scroll-direction").fadeIn();
      $(".logo a >.red").text("toronto/");
      $(".logo a >.white").text("advocacy");
    }
  };

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
    $(".bars").removeClass("bars-inactive");
    $(".bars").addClass("bars-active");
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
      $(".bars").addClass("bars-inactive");
      $(".bars").removeClass("bars-active");
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

  $('.fade-in-content').fadeIn('slow');
  $(document).on("scroll", shrinkNav);
  $(document).on("scroll", showScrollButton);
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
});
