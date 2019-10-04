// import { Messenger } from './script-partials/word-scrambler'

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
    $('.hamburger').addClass('bars-active')

    setTimeout(showNavItems, 300)
  }; // function ends
  

  // Closes the nav-menu div on close-menu click
  const closeNavMenu = () => {
    hideNavItems()

    setTimeout(function(){
      $('.nav-menu').hide()
      $('section > *').removeClass('hide')
      $('nav > .nav-right').removeClass('hide')
      $('.hamburger').removeClass('bars-active')
    }, 1400)

  }; // function ends

  $(document).on('scroll', shrinkNav);
  $('.open-menu').on('click', openNavMenu) 
  $('.close-menu').on('click', closeNavMenu) 
  

  // Word scrambler
  const Messenger = function(el) {
    const m = this;

    m.init = function() {
      m.codeLetters = '&#*+%?£@§$';
      m.message = 0;
      m.current_length = 0;
      m.fadeBuffer = false;
      m.messages = [
        'Female',
        'Equality',
        'Diversity',
        'Inclusion',
        'Intersectionality',
      ];

      setTimeout(m.animateIn, 100);
    };

    m.generateRandomString = function(length) {
      let randomText = '';
      while (randomText.length < length) {
        randomText += m.codeLetters.charAt(
          Math.floor(Math.random() * m.codeLetters.length)
        );
      }

      return randomText;
    };

    m.animateIn = function() {
      if (m.current_length < m.messages[m.message].length) {
        m.current_length += 2;
        if (m.current_length > m.messages[m.message].length) {
          m.current_length = m.messages[m.message].length;
        }

        const message = m.generateRandomString(m.current_length);
        $(el).html(message);

        setTimeout(m.animateIn, 20);
      } else {
        setTimeout(m.animateFadeBuffer, 20);
      }
    };

    m.animateFadeBuffer = function() {
      if (m.fadeBuffer === false) {
        m.fadeBuffer = [];
        for (let i = 0; i < m.messages[m.message].length; i++) {
          m.fadeBuffer.push({
            c: Math.floor(Math.random() * 12) + 1,
            l: m.messages[m.message].charAt(i),
          });
        }
      }

      let do_cycles = false;
      let message = '';

      for (let i = 0; i < m.fadeBuffer.length; i++) {
        const fader = m.fadeBuffer[i];
        if (fader.c > 0) {
          do_cycles = true;
          fader.c--;
          message += m.codeLetters.charAt(
            Math.floor(Math.random() * m.codeLetters.length)
          );
        } else {
          message += fader.l;
        }
      }

      $(el).html(message);

      if (do_cycles === true) {
        setTimeout(m.animateFadeBuffer, 50);
      } else {
        setTimeout(m.cycleText, 2000);
      }
    };

    m.cycleText = function() {
      m.message += 1;
      if (m.message >= m.messages.length) {
        m.message = 0;
      }

      m.current_length = 0;
      m.fadeBuffer = false;
      $(el).html('');

      setTimeout(m.animateIn, 200);
    };

    m.init();
  };

  console.clear();
  const messenger = new Messenger($('#word-scrambler'));
});
