// 62ms, 85.34%
// 42.2 MB

const wordPattern = function(pattern, s) {
    const obj = {};
    const arr1 = Array.from(new Set(pattern.split("")));
    const arr2 = Array.from(new Set(s.split(" ")));

    if(arr1.length !== arr2.length) return false;

    s = s.split(" ");

    for(let i = 0; i < arr1.length; i++) {
        obj[arr1[i]] = arr2[i];
    }

    for(let i = 0; i < s.length; i++) {
        if (obj[pattern[i]] !== s[i]) return false;
    }
    return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));

console.log(wordPattern("abba", "dog cat cat fish"));

console.log(wordPattern("aaaa", "dog cat cat dog"));