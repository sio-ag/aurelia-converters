import { BaseNumberValueConverter } from "./base-number";

export let IntegerValueConverter = class IntegerValueConverter extends BaseNumberValueConverter {

    constructor() {
        super();

        this.defaults = {
            format: '0,0'
        };
    }
};