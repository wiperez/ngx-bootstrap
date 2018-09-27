import { Injectable } from '@angular/core';
/** Default values provider for tooltip */
export class TooltipConfig {
    constructor() {
        /** tooltip placement, supported positions: 'top', 'bottom', 'left', 'right' */
        this.placement = 'top';
        /** array of event names which triggers tooltip opening */
        this.triggers = 'hover focus';
    }
}
TooltipConfig.decorators = [
    { type: Injectable },
];
//# sourceMappingURL=tooltip.config.js.map