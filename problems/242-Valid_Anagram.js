// 117ms, 41.26%
// 48.6mb

const isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }

    s = [...s].sort().join("");
    t = [...t].sort().join("");

    return s === t ? true : false;
};

console.log(isAnagram("anagram", "nagaram"));

console.log(isAnagram("rat", "car"));