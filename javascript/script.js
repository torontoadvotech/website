// import { Messenger } from './script-partials/word-scrambler'

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

  // Word scrambler
  const Messenger = function(el) {
    const m = this;

    m.init = function() {
      m.codeletters = '&#*+%?£@§$';
      m.message = 0;
      m.current_length = 0;
      m.fadeBuffer = false;
      m.messages = [
        'Female',
        'Intersectional Gender-Equality',
        'Diversity',
        'Inclusion',
      ];

      setTimeout(m.animateIn, 100);
    };

    m.generateRandomString = function(length) {
      let random_text = '';
      while (random_text.length < length) {
        random_text += m.codeletters.charAt(
          Math.floor(Math.random() * m.codeletters.length)
        );
      }

      return random_text;
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
        for (var i = 0; i < m.messages[m.message].length; i++) {
          m.fadeBuffer.push({
            c: Math.floor(Math.random() * 12) + 1,
            l: m.messages[m.message].charAt(i),
          });
        }
      }

      let do_cycles = false;
      let message = '';

      for (var i = 0; i < m.fadeBuffer.length; i++) {
        const fader = m.fadeBuffer[i];
        if (fader.c > 0) {
          do_cycles = true;
          fader.c--;
          message += m.codeletters.charAt(
            Math.floor(Math.random() * m.codeletters.length)
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
