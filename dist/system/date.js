'use strict';

System.register(['moment-timezone'], function (_export, _context) {
    "use strict";

    var moment, DateValueConverter;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_momentTimezone) {
            moment = _momentTimezone.default;
        }],
        execute: function () {
            _export('DateValueConverter', DateValueConverter = function () {
                function DateValueConverter() {
                    _classCallCheck(this, DateValueConverter);

                    this.defaults = {
                        format: 'L LT'
                    };
                }

                DateValueConverter.prototype.toView = function toView(value, format, timezone) {
                    if (!value) {
                        return null;
                    }

                    value = moment(value);

                    if (timezone) {
                        value = value.tz(timezone);
                    }

                    return value.format(format || this.defaults.format);
                };

                return DateValueConverter;
            }());

            _export('DateValueConverter', DateValueConverter);
        }
    };
});