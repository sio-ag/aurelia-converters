import {BaseNumberValueConverter} from "./base-number";

/**
 * Format numbers values according to format using numeral.
 *
 * Default: integer
 */
export class IntegerValueConverter extends BaseNumberValueConverter {

    constructor() {
        super();

        this.defaults = {
            format: '0,0'
        }
    }
}
