'use strict';

module.exports = class SwitchToButton {
  constructor(/*config*/) {

    this._switch = 'off';
    this.value = 'off';
  }

  action(arg) {

    if(this._switch === arg) {
      return;
    }

    this._switch = arg;

    this.value = 'on';
    this.value = 'off';
  }

  // close(done) { }

  static metadata(builder) {
    const binary  = builder.enum('off', 'on');

    builder.usage.vpanel();

    builder.attribute('value', binary);
    builder.action('action', binary);
  }
};
