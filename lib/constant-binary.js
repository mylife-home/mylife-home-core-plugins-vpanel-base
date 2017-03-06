'use strict';

module.exports = class ConstantBinary {
  constructor(config) {
    this.value = config.value === 'on' ? 'on' : 'off';
  }

  // close(done) { }

  static metadata(builder) {
    const binary = builder.enum('off', 'on');

    builder.usage.vpanel();

    builder.config('value', 'string');

    builder.attribute('value', binary);
  }
};
