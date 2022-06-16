// 67ms, 96.03%
// 44.4 MB

const repeatedSubstringPattern = function(s) {
    const str = s + s;
    return str.slice(1, str.length - 1).includes(s);
};

console.log(repeatedSubstringPattern("abab"));

console.log(repeatedSubstringPattern("aba"));

console.log(repeatedSubstringPattern("abcabcabcabc"));