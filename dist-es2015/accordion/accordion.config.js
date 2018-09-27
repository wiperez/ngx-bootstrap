import { Injectable } from '@angular/core';
/**
 * Configuration service, provides default values for the AccordionComponent.
 */
export class AccordionConfig {
    constructor() {
        /** Whether the other panels should be closed when a panel is opened */
        this.closeOthers = false;
    }
}
AccordionConfig.decorators = [
    { type: Injectable },
];
//# sourceMappingURL=accordion.config.js.map