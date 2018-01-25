"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TimeValueConverter = undefined;

var _baseNumber = require("./base-number");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TimeValueConverter = exports.TimeValueConverter = function () {
    function TimeValueConverter() {
        _classCallCheck(this, TimeValueConverter);
    }

    TimeValueConverter.prototype.toView = function toView(value, format) {
        if (!value) {
            return null;
        }

        var hours = Math.floor(value / 3600);
        var minutes = Math.floor((value - hours * 3600) / 60);
        var seconds = value - hours * 3600 - minutes * 60;

        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        return hours + ':' + minutes + ':' + seconds;
    };

    return TimeValueConverter;
}();