"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TimeValueConverter = undefined;

var _baseNumber = require("./base-number");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimeValueConverter = exports.TimeValueConverter = function (_BaseNumberValueConve) {
    _inherits(TimeValueConverter, _BaseNumberValueConve);

    function TimeValueConverter() {
        _classCallCheck(this, TimeValueConverter);

        var _this = _possibleConstructorReturn(this, _BaseNumberValueConve.call(this));

        _this.defaults = {
            format: '00:00:00'
        };
        return _this;
    }

    return TimeValueConverter;
}(_baseNumber.BaseNumberValueConverter);