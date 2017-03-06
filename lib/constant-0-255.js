'use strict';

module.exports = class Constant_0_255 {
  constructor(config) {
    const val = config.value;
    if(val < 0) { val = 0; }
    if(val > 255) { val = 255; }
    this.value = val;
  }

  // close(done) { }

  static metadata(builder) {
    const type = builder.range(0, 255);

    builder.usage.vpanel();

    builder.config('value', 'integer');

    builder.attribute('value', type);
  }
};
