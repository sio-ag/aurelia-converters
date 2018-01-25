import {BaseNumberValueConverter} from "./base-number";

/**
 * Format second values according to format using numeral.
 *
 * Default: 00:00:00
 */
export class TimeValueConverter {

    toView(value, format) {
        if (!value) {
            return null;
        }

        let hours   = Math.floor(value / 3600);
        let minutes = Math.floor((value - (hours * 3600)) / 60);
        let seconds = value - (hours * 3600) - (minutes * 60);

        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        return hours+':'+minutes+':'+seconds;
    }
}
