// 59ms, 96.95%
// 42.2 MB

const percentageLetter = function(s, letter) {
    const regex = new RegExp(letter, "g");
    const matched = s.match(regex);
    return matched ? Math.floor((matched.length / s.length) * 100) : 0;
};

console.log(percentageLetter("foobar", "o"));

console.log(percentageLetter("jjjj", "k"));