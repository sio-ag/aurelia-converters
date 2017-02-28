'use strict';

System.register(['numeral'], function (_export, _context) {
    "use strict";

    var numeral, BaseNumberValueConverter;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_numeral) {
            numeral = _numeral.default;
        }],
        execute: function () {
            _export('BaseNumberValueConverter', BaseNumberValueConverter = function () {
                function BaseNumberValueConverter() {
                    _classCallCheck(this, BaseNumberValueConverter);

                    this.defaults = {
                        format: '0,0.00'
                    };
                }

                BaseNumberValueConverter.prototype.toView = function toView(value, format) {
                    if (!value) {
                        return null;
                    }

                    return numeral(value).format(format || this.defaults.format);
                };

                return BaseNumberValueConverter;
            }());

            _export('BaseNumberValueConverter', BaseNumberValueConverter);
        }
    };
});