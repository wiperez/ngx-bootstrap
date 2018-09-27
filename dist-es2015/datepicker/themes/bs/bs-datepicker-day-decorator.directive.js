import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
export class BsDatepickerDayDecoratorComponent {
}
BsDatepickerDayDecoratorComponent.decorators = [
    { type: Component, args: [{
                selector: '[bsDatepickerDayDecorator]',
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.disabled]': 'day.isDisabled',
                    '[class.is-highlighted]': 'day.isHovered',
                    '[class.is-other-month]': 'day.isOtherMonth',
                    '[class.in-range]': 'day.isInRange',
                    '[class.select-start]': 'day.isSelectionStart',
                    '[class.select-end]': 'day.isSelectionEnd',
                    '[class.selected]': 'day.isSelected'
                },
                template: `{{ day.label }}`
            },] },
];
/** @nocollapse */
BsDatepickerDayDecoratorComponent.propDecorators = {
    "day": [{ type: Input },],
};
//# sourceMappingURL=bs-datepicker-day-decorator.directive.js.map