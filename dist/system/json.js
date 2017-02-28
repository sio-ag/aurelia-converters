"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var JsonValueConverter;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _export("JsonValueConverter", JsonValueConverter = function () {
                function JsonValueConverter() {
                    _classCallCheck(this, JsonValueConverter);
                }

                JsonValueConverter.prototype.toView = function toView(obj) {
                    return JSON.stringify(obj, null, 2);
                };

                return JsonValueConverter;
            }());

            _export("JsonValueConverter", JsonValueConverter);
        }
    };
});