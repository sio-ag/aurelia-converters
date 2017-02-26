define(['exports', './keys'], function (exports, _keys) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_keys).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _keys[key];
      }
    });
  });
  exports.configure = configure;
  function configure(config) {
    config.globalResources('./keys');
  }
});