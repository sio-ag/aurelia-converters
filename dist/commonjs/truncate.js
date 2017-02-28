'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TruncateValueConverter = exports.TruncateValueConverter = function () {
    function TruncateValueConverter() {
        _classCallCheck(this, TruncateValueConverter);

        this.defaults = {
            more: '...',
            boundary: ' '
        };
    }

    TruncateValueConverter.prototype.toView = function toView(string, length, more, boundary) {
        if (string.length <= length) {
            return string;
        }

        var subString = string.substr(0, length - 1);

        var options = Object.assign({}, this.defaults);

        if (more != null) {
            options.more = more;
        }

        if (boundary != null) {
            options.boundary = boundary;
        }

        if (options.boundary !== false) {
            return subString.substr(0, subString.lastIndexOf(options.boundary)) + options.more;
        } else {
            return subString + options.more;
        }
    };

    return TruncateValueConverter;
}();