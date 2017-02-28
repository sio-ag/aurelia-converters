define(["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var JsonValueConverter = exports.JsonValueConverter = function () {
        function JsonValueConverter() {
            _classCallCheck(this, JsonValueConverter);
        }

        JsonValueConverter.prototype.toView = function toView(obj) {
            return JSON.stringify(obj, null, 2);
        };

        return JsonValueConverter;
    }();
});