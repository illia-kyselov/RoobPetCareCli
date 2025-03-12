export const parseWeighingDate = (dateStr) => {
    if (!dateStr) return new Date();
    let date;
    if (dateStr.includes('.')) {
        const [day, month, year] = dateStr.split('.');
        date = new Date(year, month - 1, day);
    } else if (dateStr.includes('/')) {
        const [day, month, year] = dateStr.split('/');
        date = new Date(year, month - 1, day);
    } else {
        date = new Date(dateStr);
    }
    return isNaN(date.getTime()) ? new Date() : date;
};
