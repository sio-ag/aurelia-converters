/**
 * Returns joined array with separator
 */
export class JoinValueConverter {

    constructor()
    {
        this.defaults = {
            separator: ', '
        }
    }

    toView(array, separator) {
        return array.join(separator || this.defaults.separator);
    }
}
