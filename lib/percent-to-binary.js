'use strict';

module.exports = class PercentToBinary {
  constructor(config) {

    this._threshold  = config.threshold;

    this.value = 'off';
  }

  setValue(arg) {
    this.value = arg < this._threshold ? 'off' : 'on';
  }

  // close(done) { }

  static metadata(builder) {
    const binary  = builder.enum('off', 'on');
    const percent = builder.range(0, 100);

    builder.usage.vpanel();

    builder.config('threshold', 'integer');

    builder.attribute('value', binary);
    builder.action('setValue', percent);
  }
};
