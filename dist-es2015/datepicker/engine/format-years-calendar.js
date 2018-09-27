import { shiftDate, formatDate } from 'ngx-bootstrap/chronos';
import { createMatrix } from '../utils/matrix-utils';
const height = 4;
const width = 4;
export const yearsPerCalendar = height * width;
const initialShift = (Math.floor(yearsPerCalendar / 2) - 1) * -1;
const shift = { year: 1 };
export function formatYearsCalendar(viewDate, formatOptions) {
    const initialDate = shiftDate(viewDate, { year: initialShift });
    const matrixOptions = { width, height, initialDate, shift };
    const yearsMatrix = createMatrix(matrixOptions, date => ({
        date,
        label: formatDate(date, formatOptions.yearLabel, formatOptions.locale)
    }));
    const yearTitle = formatYearRangeTitle(yearsMatrix, formatOptions);
    return {
        years: yearsMatrix,
        monthTitle: '',
        yearTitle
    };
}
function formatYearRangeTitle(yearsMatrix, formatOptions) {
    const from = formatDate(yearsMatrix[0][0].date, formatOptions.yearTitle, formatOptions.locale);
    const to = formatDate(yearsMatrix[height - 1][width - 1].date, formatOptions.yearTitle, formatOptions.locale);
    return `${from} - ${to}`;
}
//# sourceMappingURL=format-years-calendar.js.map