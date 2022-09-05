// 53ms, 98.42%
// 42.3 MB

const dayOfTheWeek = function(day, month, year) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(`${year}-${month}-${day}`);
    return days[date.getDay()];
};

console.log(dayOfTheWeek(31, 8, 2019));

console.log(dayOfTheWeek(18, 7, 1999));

console.log(dayOfTheWeek(15, 8, 1993));