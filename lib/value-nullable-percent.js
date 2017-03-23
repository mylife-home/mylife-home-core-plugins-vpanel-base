'use strict';

module.exports = class ValueNullablePercent {
  constructor(config) {

    this.value = -1;
  }

  setValue(arg) {
    this.value = arg;
  }

  // close(done) { }

  static metadata(builder) {
    const nullablePercent  = builder.range(-1, 100);

    builder.usage.vpanel();

    builder.attribute('value', nullablePercent);
    builder.action('setValue', nullablePercent);
  }
};
