'use strict';

module.exports = class ValueBinary {
  constructor(config) {

    this.value = 'off';
  }

  setValue(arg) {
    this.value = arg;
  }

  // close(done) { }

  static metadata(builder) {
    const binary  = builder.enum('off', 'on');

    builder.usage.vpanel();

    builder.attribute('value', binary);
    builder.action('setValue', binary);
  }
};
