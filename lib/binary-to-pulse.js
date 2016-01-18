'use strict';

module.exports = class BinaryToPulse {
  constructor(/*config*/) {

    this.off = 'off';
    this.on  = 'off';
  }

  action(arg) {
    switch(arg) {
      case 'off':
        this.off = 'on';
        this.off = 'off';
        break;
      case 'on':
        this.on = 'on';
        this.on = 'off';
        break;
    }
  }

  // close(done) { }

  static metadata(builder) {
    const binary  = builder.enum('off', 'on');

    builder.usage.vpanel();

    builder.action('action', binary);
    builder.attribute('off', binary);
    builder.attribute('on', binary);
  }
};
