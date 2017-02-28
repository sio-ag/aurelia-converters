import { BaseNumberValueConverter } from "./base-number";

export let FilesizeValueConverter = class FilesizeValueConverter extends BaseNumberValueConverter {

    constructor() {
        super();

        this.defaults = {
            format: '0.00 b'
        };
    }
};