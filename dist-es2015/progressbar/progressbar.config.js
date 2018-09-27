import { Injectable } from '@angular/core';
export class ProgressbarConfig {
    constructor() {
        /** if `true` changing value of progress bar will be animated */
        this.animate = false;
        /** maximum total value of progress element */
        this.max = 100;
    }
}
ProgressbarConfig.decorators = [
    { type: Injectable },
];
//# sourceMappingURL=progressbar.config.js.map