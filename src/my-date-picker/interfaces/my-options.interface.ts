import { IMyDayLabels } from "./my-day-labels.interface";
import { IMyMonthLabels } from "./my-month-labels.interface";
import { IMyDate } from "./my-date.interface";
import { IMyDateRange } from "./my-date-range.interface";
import { IMyMarkedDates } from "./my-marked-dates.interface";
import { IMyMarkedDate } from "./my-marked-date.interface";

export interface IMyOptions {
    dayLabels?: IMyDayLabels;
    monthLabels?: IMyMonthLabels;
    dateFormat?: string;
    showTodayBtn?: boolean;
    todayBtnTxt?: string;
    firstDayOfWeek?: string;
    satHighlight?: boolean;
    sunHighlight?: boolean;
    highlightDates?: Array<IMyDate>;
    markCurrentDay?: boolean;
    markCurrentMonth?: boolean;
    markCurrentYear?: boolean;
    disableUntil?: IMyDate;
    disableSince?: IMyDate;
    disableDays?: Array<IMyDate>;
    enableDays?: Array<IMyDate>;
    closedDays?: Array<IMyDate>;
    eventsDays?: Array<IMyDate>;
    markDates?: Array<IMyMarkedDates>;
    markWeekends?: IMyMarkedDate;
    disableDateRanges?: Array<IMyDateRange>;
    disableWeekends?: boolean;
    disableWeekdays?: Array<string>;
    showWeekNumbers?: boolean;
    height?: string;
    width?: string;
    selectionTxtFontSize?: string;
    selectorHeight?: string;
    selectorWidth?: string;
    allowDeselectDate?: boolean;
    inline?: boolean;
    showClearDateBtn?: boolean;
    showDecreaseDateBtn?: boolean;
    showIncreaseDateBtn?: boolean;
    alignSelectorRight?: boolean;
    openSelectorTopOfInput?: boolean;
    indicateInvalidDate?: boolean;
    editableDateField?: boolean;
    monthSelector?: boolean;
    yearSelector?: boolean;
    disableHeaderButtons?: boolean;
    minYear?: number;
    maxYear?: number;
    componentDisabled?: boolean;
    showSelectorArrow?: boolean;
    showInputField?: boolean;
    openSelectorOnInputClick?: boolean;
    allowSelectionOnlyInCurrentMonth?: boolean;
    ariaLabelInputField?: string;
    ariaLabelClearDate?: string;
    ariaLabelDecreaseDate?: string;
    ariaLabelIncreaseDate?: string;
    ariaLabelOpenCalendar?: string;
    ariaLabelPrevMonth?: string;
    ariaLabelNextMonth?: string;
    ariaLabelPrevYear?: string;
    ariaLabelNextYear?: string;
}

export interface IMyDpOptions extends IMyOptions {}