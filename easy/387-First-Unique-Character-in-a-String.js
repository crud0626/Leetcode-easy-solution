// 95ms, 94.03%
// 44.6MB

const firstUniqChar = function(s) {
    for(let i = 0; i < s.length; i++) {
        if(s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i;
        }
    }
    return -1;
};

console.log(firstUniqChar("leetcode"));

console.log(firstUniqChar("loveleetcode"));

console.log(firstUniqChar("aabb"));