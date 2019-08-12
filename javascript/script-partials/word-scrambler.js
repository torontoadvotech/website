const Messenger = function(el) {
  this.init = function() {
    this.codeLetters = '&#*+%?£@§$';
    this.message = 0;
    this.current_length = 0;
    this.fadeBuffer = false;
    this.messages = [
      'This is a message, which can be long and all.',
      'This could be another message.',
      'Also short ones work!',
      'Cool.',
    ];

    setTimeout(this.animateIn, 100);
  };

  this.generateRandomString = function(length) {
    let randomText = '';
    while (randomText.length < length) {
      randomText += this.codeLetters.charAt(
        Math.floor(Math.random() * this.codeLetters.length)
      );
    }

    return randomText;
  };

  this.animateIn = function() {
    if (this.current_length < this.messages[this.message].length) {
      this.current_length += 2;
      if (this.current_length > this.messages[this.message].length) {
        this.current_length = this.messages[this.message].length;
      }

      const message = this.generateRandomString(this.current_length);
      $(el).html(message);

      setTimeout(this.animateIn, 20);
    } else {
      setTimeout(this.animateFadeBuffer, 20);
    }
  };

  this.animateFadeBuffer = function() {
    if (this.fadeBuffer === false) {
      this.fadeBuffer = [];
      for (var i = 0; i < this.messages[this.message].length; i++) {
        this.fadeBuffer.push({
          c: Math.floor(Math.random() * 12) + 1,
          l: this.messages[this.message].charAt(i),
        });
      }
    }

    let do_cycles = false;
    let message = '';

    for (var i = 0; i < this.fadeBuffer.length; i++) {
      const fader = this.fadeBuffer[i];
      if (fader.c > 0) {
        do_cycles = true;
        fader.c--;
        message += this.codeLetters.charAt(
          Math.floor(Math.random() * this.codeLetters.length)
        );
      } else {
        message += fader.l;
      }
    }

    $(el).html(message);

    if (do_cycles === true) {
      setTimeout(this.animateFadeBuffer, 50);
    } else {
      setTimeout(this.cycleText, 2000);
    }
  };

  this.cycleText = function() {
    this.message += 1;
    if (this.message >= this.messages.length) {
      this.message = 0;
    }

    this.current_length = 0;
    this.fadeBuffer = false;
    $(el).html('');

    setTimeout(this.animateIn, 200);
  };

  this.init();
};

console.clear();

const messenger = new Messenger($('#messenger'));
