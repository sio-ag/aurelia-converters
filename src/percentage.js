import {BaseNumberValueConverter} from "./base-number";

/**
 * Format numbers values according to format using numeral.
 *
 * Default: percentage with 2 digits
 */
export class PercentageValueConverter extends BaseNumberValueConverter {

    constructor()
    {
        super();

        this.defaults = {
            format: '0.00%'
        }
    }
}
