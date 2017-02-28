'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _date = require('./date');

Object.keys(_date).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _date[key];
    }
  });
});

var _filesize = require('./filesize');

Object.keys(_filesize).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _filesize[key];
    }
  });
});

var _integer = require('./integer');

Object.keys(_integer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _integer[key];
    }
  });
});

var _join = require('./join');

Object.keys(_join).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _join[key];
    }
  });
});

var _json = require('./json');

Object.keys(_json).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _json[key];
    }
  });
});

var _keys = require('./keys');

Object.keys(_keys).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _keys[key];
    }
  });
});

var _number = require('./number');

Object.keys(_number).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _number[key];
    }
  });
});

var _percentage = require('./percentage');

Object.keys(_percentage).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _percentage[key];
    }
  });
});

var _time = require('./time');

Object.keys(_time).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _time[key];
    }
  });
});

var _truncate = require('./truncate');

Object.keys(_truncate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _truncate[key];
    }
  });
});
exports.configure = configure;
function configure(config) {
  config.globalResources(['./date', './filesize', './integer', './join', './json', './keys', './number', './percentage', './time', './truncate']);
}