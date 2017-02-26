'use strict';

System.register(['./keys'], function (_export, _context) {
  "use strict";

  function configure(config) {
    config.globalResources('./keys');
  }

  _export('configure', configure);

  return {
    setters: [function (_keys) {
      var _exportObj = {};

      for (var _key in _keys) {
        if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _keys[_key];
      }

      _export(_exportObj);
    }],
    execute: function () {}
  };
});