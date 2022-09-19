// 72ms, 99.04%
// 44.8 MB

const countBinarySubstrings = function(s) {
    let result = 0, prev = 0, curr = 1;

    for(let i = 1; i < s.length; i++) {
        if(s[i-1] !== s[i]) {
            result += Math.min(prev, curr);
            prev = curr;
            curr = 1;
            continue;
        }
        curr += 1;
    }

    return result + Math.min(prev, curr);
};

console.log(countBinarySubstrings("00110011"));

console.log(countBinarySubstrings("10101"));