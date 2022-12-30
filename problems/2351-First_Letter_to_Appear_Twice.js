// 57ms, 96.72%
// 42.3 MB

const repeatedCharacter = function(s) {
    const set = new Set();
    for(let i = 0; i < s.length; i++) {
        if(set.has(s[i])) return s[i];
        
        set.add(s[i]);
    }
};

console.log(repeatedCharacter("abccbaacz"));

console.log(repeatedCharacter("abcdd"));