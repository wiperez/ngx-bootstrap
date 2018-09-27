import { Injectable } from '@angular/core';
export class TabsetConfig {
    constructor() {
        /** provides default navigation context class: 'tabs' or 'pills' */
        this.type = 'tabs';
    }
}
TabsetConfig.decorators = [
    { type: Injectable },
];
//# sourceMappingURL=tabset.config.js.map