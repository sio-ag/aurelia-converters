'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var JoinValueConverter;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _export('JoinValueConverter', JoinValueConverter = function () {
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
            }());

            _export('JoinValueConverter', JoinValueConverter);
        }
    };
});