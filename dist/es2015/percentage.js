import { BaseNumberValueConverter } from "./base-number";

export let PercentageValueConverter = class PercentageValueConverter extends BaseNumberValueConverter {

    constructor() {
        super();

        this.defaults = {
            format: '0.00%'
        };
    }
};