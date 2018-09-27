import { Injectable, ElementRef } from '@angular/core';
import { positionElements } from './ng-positioning';
export class PositioningService {
    position(options) {
        const { element, target, attachment, appendToBody } = options;
        positionElements(_getHtmlElement(target), _getHtmlElement(element), attachment, appendToBody);
    }
}
PositioningService.decorators = [
    { type: Injectable },
];
function _getHtmlElement(element) {
    // it means that we got a selector
    if (typeof element === 'string') {
        return document.querySelector(element);
    }
    if (element instanceof ElementRef) {
        return element.nativeElement;
    }
    return element;
}
//# sourceMappingURL=positioning.service.js.map