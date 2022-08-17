// 56ms, 99.76%
// 45.2 MB

const restoreString = function(s, indices) {
    const result = new Array(s.length);
    for(let i = 0; i < s.length; i++) {
        result[indices[i]] = s[i];
    }
    return result.join("");
};

console.log(restoreString("codeleet", [4,5,6,7,0,2,1,3]));

console.log(restoreString("abc", [0,1,2]));