'use strict';

module.exports = class BinaryToPercent {
  constructor(config) {

    this._low  = config.low;
    this._high = config.high;

    this.value = this._low;
  }

  setValue(arg) {
    this.value = arg === 'off' ? this._low : this._high;
  }

  // close(done) { }

  static metadata(builder) {
    const binary  = builder.enum('off', 'on');
    const percent = builder.range(0, 100);

    builder.usage.vpanel();

    builder.config('low', 'integer');
    builder.config('high', 'integer');

    builder.attribute('value', percent);
    builder.action('setValue', binary);
  }
};
