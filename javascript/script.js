// import { Messenger } from './script-partials/word-scrambler'

// Shrink header nav on scroll
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
//   const Messenger = function(el) {
//     const m = this;

//     m.init = function() {
//       m.codeLetters = '&#*+%?£@§$';
//       m.message = 0;
//       m.current_length = 0;
//       m.fadeBuffer = false;
//       m.messages = [
//         'Female',
//         'Equality',
//         'Diversity',
//         'Inclusion',
//         'Intersectionality',
//       ];

//       setTimeout(m.animateIn, 100);
//     };

//     m.generateRandomString = function(length) {
//       let randomText = '';
//       while (randomText.length < length) {
//         randomText += m.codeLetters.charAt(
//           Math.floor(Math.random() * m.codeLetters.length)
//         );
//       }

//       return randomText;
//     };

//     m.animateIn = function() {
//       if (m.current_length < m.messages[m.message].length) {
//         m.current_length += 2;
//         if (m.current_length > m.messages[m.message].length) {
//           m.current_length = m.messages[m.message].length;
//         }

//         const message = m.generateRandomString(m.current_length);
//         $(el).html(message);

//         setTimeout(m.animateIn, 20);
//       } else {
//         setTimeout(m.animateFadeBuffer, 20);
//       }
//     };

//     m.animateFadeBuffer = function() {
//       if (m.fadeBuffer === false) {
//         m.fadeBuffer = [];
//         for (let i = 0; i < m.messages[m.message].length; i++) {
//           m.fadeBuffer.push({
//             c: Math.floor(Math.random() * 12) + 1,
//             l: m.messages[m.message].charAt(i),
//           });
//         }
//       }

//       let do_cycles = false;
//       let message = '';

//       for (let i = 0; i < m.fadeBuffer.length; i++) {
//         const fader = m.fadeBuffer[i];
//         if (fader.c > 0) {
//           do_cycles = true;
//           fader.c--;
//           message += m.codeLetters.charAt(
//             Math.floor(Math.random() * m.codeLetters.length)
//           );
//         } else {
//           message += fader.l;
//         }
//       }

//       $(el).html(message);

//       if (do_cycles === true) {
//         setTimeout(m.animateFadeBuffer, 50);
//       } else {
//         setTimeout(m.cycleText, 2000);
//       }
//     };

//     m.cycleText = function() {
//       m.message += 1;
//       if (m.message >= m.messages.length) {
//         m.message = 0;
//       }

//       m.current_length = 0;
//       m.fadeBuffer = false;
//       $(el).html('');

//       setTimeout(m.animateIn, 200);
//     };

//     m.init();
//   };

//   console.clear();
//   const messenger = new Messenger($('#word-scrambler'));
// });

// CTA Border animation

// const $cta = $('.cta');
// const degreeObj = { prop: 90 };

// TweenMax.to(degreeObj, 1, {
//   prop: 450,
//   repeat: 1,
//   onUpdate() {
//     $cta.css(
//       'border-image-source',
//       `linear-gradient(${degreeObj.prop}deg, #e9002d, #002de9`
//     );
//   },
// });
