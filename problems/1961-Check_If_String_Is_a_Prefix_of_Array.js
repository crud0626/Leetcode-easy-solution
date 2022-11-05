// 68ms, 94.18%
// 42.1 MB

const isPrefixString = function(s, words) {
    let newS = "";
    for(let i = 0; i <= words.length; i++) {
        if(newS === s) return true;
        if(!s.includes(words[i])) break;
        newS += words[i];
    }
    return false;
};

console.log(isPrefixString("iloveleetcode", ["i","love","leetcode","apples"]));

console.log(isPrefixString("iloveleetcode", ["apples","i","love","leetcode"]));