import numeral from 'numeral';

export class BaseNumberValueConverter {

    constructor()
    {
        this.defaults = {
            format: '0,0.00'
        }
    }

    toView(value, format) {
        if (!value) {
            return null;
        }

        return numeral(value).format(format || this.defaults.format);
    }
}
