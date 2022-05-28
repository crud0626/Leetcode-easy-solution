// 62ms, 97.14%
// 44.3 MB

const findTheDifference = function(s, t) {
    s = [...s].sort().join("");
    t = [...t].sort().join("");
    for(let i = 0; i < t.length; i++) {
        if(s[i] !== t[i]) {
            return t[i];
        }
    }
};

console.log(findTheDifference("abcd", "abcde"));

console.log(findTheDifference("", "y"));