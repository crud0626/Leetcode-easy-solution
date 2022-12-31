// 59ms, 93.76%
// 41.6 MB

const minimumOperations = function(nums) {
    const set = new Set(nums);
    return set.has(0) ? set.size - 1 : set.size;
};

console.log(minimumOperations([1,5,0,3,5]));

console.log(minimumOperations([0]));