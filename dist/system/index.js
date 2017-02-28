'use strict';

System.register(['./date', './filesize', './integer', './join', './json', './keys', './number', './percentage', './time', './truncate'], function (_export, _context) {
  "use strict";

  function configure(config) {
    config.globalResources(['./date', './filesize', './integer', './join', './json', './keys', './number', './percentage', './time', './truncate']);
  }

  _export('configure', configure);

  return {
    setters: [function (_date) {
      var _exportObj = {};

      for (var _key in _date) {
        if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _date[_key];
      }

      _export(_exportObj);
    }, function (_filesize) {
      var _exportObj2 = {};

      for (var _key2 in _filesize) {
        if (_key2 !== "default" && _key2 !== "__esModule") _exportObj2[_key2] = _filesize[_key2];
      }

      _export(_exportObj2);
    }, function (_integer) {
      var _exportObj3 = {};

      for (var _key3 in _integer) {
        if (_key3 !== "default" && _key3 !== "__esModule") _exportObj3[_key3] = _integer[_key3];
      }

      _export(_exportObj3);
    }, function (_join) {
      var _exportObj4 = {};

      for (var _key4 in _join) {
        if (_key4 !== "default" && _key4 !== "__esModule") _exportObj4[_key4] = _join[_key4];
      }

      _export(_exportObj4);
    }, function (_json) {
      var _exportObj5 = {};

      for (var _key5 in _json) {
        if (_key5 !== "default" && _key5 !== "__esModule") _exportObj5[_key5] = _json[_key5];
      }

      _export(_exportObj5);
    }, function (_keys) {
      var _exportObj6 = {};

      for (var _key6 in _keys) {
        if (_key6 !== "default" && _key6 !== "__esModule") _exportObj6[_key6] = _keys[_key6];
      }

      _export(_exportObj6);
    }, function (_number) {
      var _exportObj7 = {};

      for (var _key7 in _number) {
        if (_key7 !== "default" && _key7 !== "__esModule") _exportObj7[_key7] = _number[_key7];
      }

      _export(_exportObj7);
    }, function (_percentage) {
      var _exportObj8 = {};

      for (var _key8 in _percentage) {
        if (_key8 !== "default" && _key8 !== "__esModule") _exportObj8[_key8] = _percentage[_key8];
      }

      _export(_exportObj8);
    }, function (_time) {
      var _exportObj9 = {};

      for (var _key9 in _time) {
        if (_key9 !== "default" && _key9 !== "__esModule") _exportObj9[_key9] = _time[_key9];
      }

      _export(_exportObj9);
    }, function (_truncate) {
      var _exportObj10 = {};

      for (var _key10 in _truncate) {
        if (_key10 !== "default" && _key10 !== "__esModule") _exportObj10[_key10] = _truncate[_key10];
      }

      _export(_exportObj10);
    }],
    execute: function () {}
  };
});