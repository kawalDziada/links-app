import moment from 'moment';

export default (links, {text, startDate, endDate}) => {
    return links.filter((link) => {
        const createdAtMoment = moment(link.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = link.description.toLowerCase().includes(text.toLowerCase()) || link.adress.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    });
};
