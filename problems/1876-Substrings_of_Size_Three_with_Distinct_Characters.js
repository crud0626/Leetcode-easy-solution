// 67ms, 95.80%
// 44.2 MB

const countGoodSubstrings = function(s) {
    let count = 0;
    s = s.split("");

    for (let i = 0; i <= s.length-3; i++) {
        const target = s.slice(i, i+3);
        const set = new Set(target);
        if (target.length === set.size) count += 1;
    }

    return count;
};

console.log(countGoodSubstrings("xyzzaz"));

console.log(countGoodSubstrings("aababcabc"));