"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KeysValueConverter = exports.KeysValueConverter = function () {
    function KeysValueConverter() {
        _classCallCheck(this, KeysValueConverter);
    }

    KeysValueConverter.prototype.toView = function toView(obj) {
        return Object.keys(obj);
    };

    return KeysValueConverter;
}();