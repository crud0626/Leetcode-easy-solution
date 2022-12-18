// 61ms, 98.8%
// 42.8 MB

const countPrefixes = function(words, s) {
    return words.filter(word => s.startsWith(word)).length;
};

console.log(countPrefixes(["a","b","c","ab","bc","abc"], "abc"));

console.log(countPrefixes(["a","a"], "aa"));