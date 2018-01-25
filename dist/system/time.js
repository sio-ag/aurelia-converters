"use strict";

System.register(["./base-number"], function (_export, _context) {
    "use strict";

    var BaseNumberValueConverter, TimeValueConverter;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_baseNumber) {
            BaseNumberValueConverter = _baseNumber.BaseNumberValueConverter;
        }],
        execute: function () {
            _export("TimeValueConverter", TimeValueConverter = function () {
                function TimeValueConverter() {
                    _classCallCheck(this, TimeValueConverter);
                }

                TimeValueConverter.prototype.toView = function toView(value, format) {
                    if (!value) {
                        return null;
                    }

                    var negative = false;
                    if (value < 0) {
                        negative = true;
                        value = Math.abs(value);
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
                    return (negative ? '-' : '') + hours + ':' + minutes + ':' + seconds;
                };

                return TimeValueConverter;
            }());

            _export("TimeValueConverter", TimeValueConverter);
        }
    };
});