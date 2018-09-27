import { Injectable } from '@angular/core';
import { BsDatepickerConfig } from './bs-datepicker.config';
export class BsDaterangepickerConfig extends BsDatepickerConfig {
    constructor() {
        super(...arguments);
        // DatepickerRenderOptions
        this.displayMonths = 2;
    }
}
BsDaterangepickerConfig.decorators = [
    { type: Injectable },
];
//# sourceMappingURL=bs-daterangepicker.config.js.map