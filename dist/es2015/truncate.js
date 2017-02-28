
export let TruncateValueConverter = class TruncateValueConverter {

    constructor() {
        this.defaults = {
            more: '...',
            boundary: ' '
        };
    }

    toView(string, length, more, boundary) {
        if (string.length <= length) {
            return string;
        }

        let subString = string.substr(0, length - 1);

        let options = Object.assign({}, this.defaults);

        if (more != null) {
            options.more = more;
        }

        if (boundary != null) {
            options.boundary = boundary;
        }

        if (options.boundary !== false) {
            return subString.substr(0, subString.lastIndexOf(options.boundary)) + options.more;
        } else {
            return subString + options.more;
        }
    }
};