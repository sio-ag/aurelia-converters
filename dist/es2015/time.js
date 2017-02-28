import { BaseNumberValueConverter } from "./base-number";

export let TimeValueConverter = class TimeValueConverter extends BaseNumberValueConverter {

    constructor() {
        super();

        this.defaults = {
            format: '00:00:00'
        };
    }
};