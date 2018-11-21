import numeral from 'numeral';

export let BaseNumberValueConverter = class BaseNumberValueConverter {

    constructor() {
        this.defaults = {
            format: '0,0.00'
        };
    }

    toView(value, format) {
        if (null === value || undefined === value) {
            return null;
        }

        return numeral(value).format(format || this.defaults.format);
    }
};