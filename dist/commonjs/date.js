'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DateValueConverter = undefined;

var _momentTimezone = require('moment-timezone');

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DateValueConverter = exports.DateValueConverter = function () {
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

        value = (0, _momentTimezone2.default)(value);

        if (timezone) {
            value = value.tz(timezone);
        }

        return value.format(format || this.defaults.format);
    };

    return DateValueConverter;
}();