'use strict';

module.exports = class Constant_0_100 {
  constructor(config) {
    const val = config.value;
    if(val < 0) { val = 0; }
    if(val > 100) { val = 100; }
    this.value = val;
  }

  // close(done) { }

  static metadata(builder) {
    const percent = builder.range(0, 100);

    builder.usage.vpanel();

    builder.config('value', 'integer');

    builder.attribute('value', percent);
  }
};
