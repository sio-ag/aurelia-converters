'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JoinValueConverter = exports.JoinValueConverter = function () {
    function JoinValueConverter() {
        _classCallCheck(this, JoinValueConverter);

        this.defaults = {
            separator: ', '
        };
    }

    JoinValueConverter.prototype.toView = function toView(array, separator) {
        return array.join(separator || this.defaults.separator);
    };

    return JoinValueConverter;
}();