/**
 * Returns input returned as json.
 *
 * Useful for dumping objects
 */
export class JsonValueConverter {

    toView(obj) {
        return JSON.stringify(obj, null, 2);
    }
}
