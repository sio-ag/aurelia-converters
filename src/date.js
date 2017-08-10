import moment from 'moment-timezone';

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

    toView(value, format, timezone) {
        if (!value) {
            return null;
        }

        value = moment(value);

        if (timezone) {
            value = value.tz(timezone);
        }

        return value.format(format || this.defaults.format);
    }
}
