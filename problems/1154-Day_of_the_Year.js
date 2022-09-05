// 182ms, 98.32%
// 51.2 MB

const dayOfYear = function(date) {
    date = new Date(date);
    const newYear = new Date(`${date.getFullYear()}-01-01`);
    
    let day = 1;
    const diffTime = date.getTime() - newYear.getTime();
    const msOfDay = 1000 * 60 * 60 * 24;

    day += diffTime / msOfDay;

    return day;
};

console.log(dayOfYear("2019-01-09"));

console.log(dayOfYear("2019-02-10"));