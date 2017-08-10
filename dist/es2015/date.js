import moment from 'moment-timezone';

export let DateValueConverter = class DateValueConverter {

    constructor() {
        this.defaults = {
            format: 'L LT'
        };
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
};