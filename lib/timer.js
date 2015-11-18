'use strict';

module.exports = class StepRelay {
  constructor(config) {
    this.value = 'off';
    this.delay = parseInt(config.delay);
    this.pending = null;
  }

  action(arg) {
    if(arg === 'off') { return; }
    if(this.pending) {
      clearTimeout(this.pending);
    } else {
      this.value = 'on';
    }
    this.pending = setTimeout(this.cancel.bind(this, 'on'), this.delay * 1000);
  }

  cancel(arg) {
    if(arg === 'off') { return; }
    if(this.pending) {
      clearTimeout(this.pending);
      this.pending = null;
    }
    this.value = 'off';
  }

  close(done) {
    if(this.pending) {
      clearTimeout(this.pending);
      this.pending = null;
    }
    setImmediate(done);
  }

  static metadata(builder) {
    const binary = builder.enum('off', 'on');
    builder.usage.vpanel();
    builder.attribute('value', binary);
    builder.action('action', binary);
    builder.action('cancel', binary);
    builder.config('delay', 'integer');
  }
};
