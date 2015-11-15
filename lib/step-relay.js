'use strict';

module.exports = class StepRelay {
  constructor(/*config*/) {
    this.value = 'off';
  }

  action(arg) {
    if(arg === 'off') { return; }
    this.value = this.value === 'off' ? 'on' : 'off';
  }

  on(arg) {
    if(arg === 'off') { return; }
    this.value = 'on';
  }

  off(arg) {
    if(arg === 'off') { return; }
    this.value = 'off';
  }

  // close(done) { }

  static metadata(builder) {
    const binary = builder.enum('off', 'on');
    builder.usage.vpanel();
    builder.attribute('value', binary);
    builder.action('action', binary);
    builder.action('on', binary);
    builder.action('off', binary);
  }
};
