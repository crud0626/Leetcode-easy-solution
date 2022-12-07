// 77ms, 80.37%
// 42.7 MB

const prefixCount = function(words, pref) {
    let count = 0;

    for(let i = 0; i < words.length; i++) {
        if(words[i].startsWith(pref)) {
            count += 1;
        }
    }
    
    return count;
};

console.log(prefixCount(["pay","attention","practice","attend"], "at"));

console.log(prefixCount(["leetcode","win","loops","success"], "code"));