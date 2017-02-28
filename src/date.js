import moment from 'moment';

/**
 * Format date values according to format.
 *
 * Format defaults to date + time in moment locale
 */
export class DateValueConverter {

    constructor()
    {
        this.defaults = {
            format: 'L LT'
        }
    }

    toView(value, format) {
        if (!value) {
            return null;
        }

        return moment(value).format(format || this.defaults.format);
    }
}
