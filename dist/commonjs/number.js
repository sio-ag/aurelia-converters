"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberValueConverter = undefined;

var _numeral = require("numeral");

var _numeral2 = _interopRequireDefault(_numeral);

var _baseNumber = require("./base-number");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NumberValueConverter = exports.NumberValueConverter = function (_BaseNumberValueConve) {
  _inherits(NumberValueConverter, _BaseNumberValueConve);

  function NumberValueConverter() {
    _classCallCheck(this, NumberValueConverter);

    return _possibleConstructorReturn(this, _BaseNumberValueConve.apply(this, arguments));
  }

  return NumberValueConverter;
}(_baseNumber.BaseNumberValueConverter);