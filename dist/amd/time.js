define(['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var TimeValueConverter = exports.TimeValueConverter = function () {
        function TimeValueConverter() {
            _classCallCheck(this, TimeValueConverter);
        }

        TimeValueConverter.prototype.toView = function toView(value) {
            var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '00:00:00';

            if (!value) {
                return null;
            }

            var output = '';

            value = parseFloat(value);

            if (value < 0) {
                output += '-';
                value = Math.abs(value);
            }

            if (/^0 /.test(format)) {
                if (86400 <= value) {
                    var days = Math.floor(value / 86400);

                    output += days;
                    value -= days * 86400;

                    if (0 === value) {
                        return output;
                    }

                    output += '\xA0';
                }
                format = format.replace(/^0 /, '');
            }

            var hours = Math.floor(value / 3600);

            if (10 > hours) {
                output += '0';
            }

            output += hours;

            if ('00' === format) {
                return output;
            }

            value -= hours * 3600;
            output += ':';

            var minutes = Math.floor(value / 60);

            if (10 > minutes) {
                output += '0';
            }

            output += minutes;

            if ('00:00' === format) {
                return output;
            }

            value -= minutes * 60;
            output += ':';

            if (10 > value) {
                output += '0';
            }

            return output + Math.round(value);
        };

        return TimeValueConverter;
    }();
});