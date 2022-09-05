// 53ms, 99.41%
// 41.4 MB

const rotateString = function(s, goal) {
    const target = s + s;
    return target.includes(goal) && s.length === goal.length ? true : false;
};

console.log(rotateString("abcde", "cdeab"));

console.log(rotateString("abcde", "abced"));