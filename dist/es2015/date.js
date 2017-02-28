import moment from 'moment';

export let DateValueConverter = class DateValueConverter {

    constructor() {
        this.defaults = {
            format: 'L LT'
        };
    }

    toView(value, format) {
        if (!value) {
            return null;
        }

        return moment(value).format(format || this.defaults.format);
    }
};