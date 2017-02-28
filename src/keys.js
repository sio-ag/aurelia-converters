/**
 * Returns object keys
 *
 * Useful for looping objects with repeat.for
 */
export class KeysValueConverter {
    toView(obj) {
        return Object.keys(obj);
    }
}
