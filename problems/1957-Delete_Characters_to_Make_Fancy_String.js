// 236ms, 85.26%
// 62.4 MB

const makeFancyString = function(s) {
    let newS = "";

    for(let i = 0; i < s.length; i++) {
        if(s[i] === s[i + 1] && s[i + 1] === s[i + 2]) {
            continue;
        }
        newS += s[i];
    }
    return newS;
};

console.log(makeFancyString("leeetcode"));

console.log(makeFancyString("aaabaaaa"));

console.log(makeFancyString("aab"));