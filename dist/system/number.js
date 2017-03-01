"use strict";

System.register(["numeral", "./base-number"], function (_export, _context) {
  "use strict";

  var numeral, BaseNumberValueConverter, NumberValueConverter;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_numeral) {
      numeral = _numeral.default;
    }, function (_baseNumber) {
      BaseNumberValueConverter = _baseNumber.BaseNumberValueConverter;
    }],
    execute: function () {
      _export("NumberValueConverter", NumberValueConverter = function (_BaseNumberValueConve) {
        _inherits(NumberValueConverter, _BaseNumberValueConve);

        function NumberValueConverter() {
          _classCallCheck(this, NumberValueConverter);

          return _possibleConstructorReturn(this, _BaseNumberValueConve.apply(this, arguments));
        }

        return NumberValueConverter;
      }(BaseNumberValueConverter));

      _export("NumberValueConverter", NumberValueConverter);
    }
  };
});