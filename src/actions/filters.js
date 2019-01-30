import moment from 'moment';

export const filtersReducerDefaultState = {
    text: '',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

export const setStartDate = (startDate = '') => ({
    type: 'SET_START_DATE',
    startDate
});

export const setEndDate = (endDate = '') => ({
    type: 'SET_END_DATE',
    endDate
});