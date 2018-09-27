export class BsDatepickerAbstractComponent {
    constructor() {
        this._customRangesFish = [];
    }
    set minDate(value) {
        this._effects.setMinDate(value);
    }
    set maxDate(value) {
        this._effects.setMaxDate(value);
    }
    set isDisabled(value) {
        this._effects.setDisabled(value);
    }
    setViewMode(event) { }
    navigateTo(event) { }
    dayHoverHandler(event) { }
    monthHoverHandler(event) { }
    yearHoverHandler(event) { }
    daySelectHandler(day) { }
    monthSelectHandler(event) { }
    yearSelectHandler(event) { }
    _stopPropagation(event) {
        event.stopPropagation();
    }
}
//# sourceMappingURL=bs-datepicker-container.js.map