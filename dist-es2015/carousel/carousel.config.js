import { Injectable } from '@angular/core';
export class CarouselConfig {
    constructor() {
        /** Default interval of auto changing of slides */
        this.interval = 5000;
        /** Is loop of auto changing of slides can be paused */
        this.noPause = false;
        /** Is slides can wrap from the last to the first slide */
        this.noWrap = false;
        /** Show carousel-indicators */
        this.showIndicators = true;
    }
}
CarouselConfig.decorators = [
    { type: Injectable },
];
//# sourceMappingURL=carousel.config.js.map