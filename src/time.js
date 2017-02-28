import {BaseNumberValueConverter} from "./base-number";

/**
 * Format second values according to format using numeral.
 *
 * Default: 00:00:00
 */
export class TimeValueConverter extends BaseNumberValueConverter {

    constructor()
    {
        super();

        this.defaults = {
            format: '00:00:00'
        }
    }
}
