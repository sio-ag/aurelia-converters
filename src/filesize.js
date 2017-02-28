import {BaseNumberValueConverter} from "./base-number";

/**
 * Format numbers values according to format using numeral.
 *
 * Default: filesize with 2 digits
 */
export class FilesizeValueConverter extends BaseNumberValueConverter {

    constructor()
    {
        super();

        this.defaults = {
            format: '0.00 b'
        }
    }
}
