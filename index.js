'use strict';

module.exports = {
  StepRelay            : require('./lib/step-relay'),
  Timer                : require('./lib/timer'),

  // converters
  BinaryToPercent      : require('./lib/binary-to-percent'),
  PercentToBinary      : require('./lib/percent-to-binary'),
  SwitchToButton       : require('./lib/switch-to-button'),
  BinaryToPulse        : require('./lib/binary-to-pulse'),

  // constants
  ConstantBinary       : require('./lib/constant-binary'),
  Constant_0_100       : require('./lib/constant-0-100'),
  Constant_0_255       : require('./lib/constant-0-255'),

  // value
  ValueBinary          : require('./lib/value-binary'),
  ValueNullablePercent : require('./lib/value-nullable-percent'),
};