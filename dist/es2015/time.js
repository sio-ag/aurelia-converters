
export let TimeValueConverter = class TimeValueConverter {

    toView(value, format = '00:00:00') {
        if (!value) {
            return null;
        }

        let output = '';

        value = parseFloat(value);

        if (value < 0) {
            output += '-';
            value = Math.abs(value);
        }

        if (86400 <= value) {
            const days = Math.floor(value / 86400);

            output += days;
            value -= days * 86400;

            if (0 === value) {
                return output;
            }

            output += '\xA0';
        }

        const hours = Math.floor(value / 3600);

        if (10 > hours) {
            output += '0';
        }

        output += hours;

        if ('00' === format) {
            return output;
        }

        value -= hours * 3600;
        output += ':';

        const minutes = Math.floor(value / 60);

        if (10 > minutes) {
            output += '0';
        }

        output += minutes;

        if ('00:00' === format) {
            return output;
        }

        value -= minutes * 60;
        output += ':';

        if (10 > value) {
            output += '0';
        }

        return output + Math.round(value);
    }
};