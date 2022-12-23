// 60ms, 96.3%
// 41.9 MB

const countAsterisks = function(s) {
    const result = s.replace(/\|[\w\*]*\|/g, "").match(/\*/g);
    return result ? result.length : 0 ;
};

console.log(countAsterisks("l|*e*et|c**o|*de|"));

console.log(countAsterisks("iamprogrammer"));

console.log(countAsterisks("yo|uar|e**|b|e***au|tifu|l"));