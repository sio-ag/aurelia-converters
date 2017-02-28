define(['exports', './date', './filesize', './integer', './join', './json', './keys', './number', './percentage', './time', './truncate'], function (exports, _date, _filesize, _integer, _join, _json, _keys, _number, _percentage, _time, _truncate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_date).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _date[key];
      }
    });
  });
  Object.keys(_filesize).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _filesize[key];
      }
    });
  });
  Object.keys(_integer).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _integer[key];
      }
    });
  });
  Object.keys(_join).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _join[key];
      }
    });
  });
  Object.keys(_json).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _json[key];
      }
    });
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
  Object.keys(_number).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _number[key];
      }
    });
  });
  Object.keys(_percentage).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _percentage[key];
      }
    });
  });
  Object.keys(_time).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _time[key];
      }
    });
  });
  Object.keys(_truncate).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _truncate[key];
      }
    });
  });
  exports.configure = configure;
  function configure(config) {
    config.globalResources(['./date', './filesize', './integer', './join', './json', './keys', './number', './percentage', './time', './truncate']);
  }
});