define(['exports', 'moment'], function (exports, _moment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.DateValueConverter = undefined;

    var _moment2 = _interopRequireDefault(_moment);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var DateValueConverter = exports.DateValueConverter = function () {
        function DateValueConverter() {
            _classCallCheck(this, DateValueConverter);

            this.defaults = {
                format: 'L LT'
            };
        }

        DateValueConverter.prototype.toView = function toView(value, format) {
            if (!value) {
                return null;
            }

            return (0, _moment2.default)(value).format(format || this.defaults.format);
        };

        return DateValueConverter;
    }();
});