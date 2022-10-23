// 68ms, 97.20%
// 44.3 MB

const secondHighest = function(s) {
    const nums = s.match(/\d/g);
    const set = new Set(nums);
    const arr = Array.from(set);
    arr.sort((a, b) => b - a);
    
    return arr[1] ? arr[1] : -1;
};
