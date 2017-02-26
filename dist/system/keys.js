"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var KeysValueConverter;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _export("KeysValueConverter", KeysValueConverter = function () {
                function KeysValueConverter() {
                    _classCallCheck(this, KeysValueConverter);
                }

                KeysValueConverter.prototype.toView = function toView(obj) {
                    return Object.keys(obj);
                };

                return KeysValueConverter;
            }());

            _export("KeysValueConverter", KeysValueConverter);
        }
    };
});