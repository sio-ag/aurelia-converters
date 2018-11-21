'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BaseNumberValueConverter = undefined;

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseNumberValueConverter = exports.BaseNumberValueConverter = function () {
    function BaseNumberValueConverter() {
        _classCallCheck(this, BaseNumberValueConverter);

        this.defaults = {
            format: '0,0.00'
        };
    }

    BaseNumberValueConverter.prototype.toView = function toView(value, format) {
        if (null === value || undefined === value) {
            return null;
        }

        return (0, _numeral2.default)(value).format(format || this.defaults.format);
    };

    return BaseNumberValueConverter;
}();