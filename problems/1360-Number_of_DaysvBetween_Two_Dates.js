// 47ms, 99.29%
// 41.9 MB

const daysBetweenDates = function(date1, date2) {
    const ms1 = new Date(date1).getTime();
    const ms2 = new Date(date2).getTime();
    const oneDay = 1000*60*60*24;

    return Math.abs((ms2 - ms1) / oneDay);
};

console.log(daysBetweenDates("2019-06-29", "2019-06-30"));

console.log(daysBetweenDates("2020-01-15", "2019-12-31"));