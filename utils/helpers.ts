export const formatDate = (date: Date) => {
    const d = new Date(date);

    return d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear() + ' ' +
        d.getHours() + ':' + d.getMinutes();

};