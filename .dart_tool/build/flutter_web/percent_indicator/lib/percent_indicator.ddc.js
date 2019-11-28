define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const percent_indicator = Object.create(dart.library);
  const CT = Object.create(null);
  dart.trackLibraries("packages/percent_indicator/percent_indicator", {
    "package:percent_indicator/percent_indicator.dart": percent_indicator
  }, {
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"percent_indicator.ddc.js"}');
  // Exports:
  return {
    percent_indicator: percent_indicator
  };
});

//# sourceMappingURL=percent_indicator.ddc.js.map
