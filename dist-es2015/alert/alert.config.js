import { Injectable } from '@angular/core';
export class AlertConfig {
    constructor() {
        /** default alert type */
        this.type = 'warning';
        /** is alerts are dismissible by default */
        this.dismissible = false;
        /** default time before alert will dismiss */
        this.dismissOnTimeout = undefined;
    }
}
AlertConfig.decorators = [
    { type: Injectable },
];
//# sourceMappingURL=alert.config.js.map