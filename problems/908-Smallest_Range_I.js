// 68ms, 94.39%
// 44.3 MB

const smallestRangeI = function(nums, k) {
    let min = Math.min(...nums);
    let max = Math.max(...nums);

    if (min === max || max - min <= k*2) return 0;

    max -= k;
    min += k;

    return max-min;
};

console.log(smallestRangeI([1], 0));

console.log(smallestRangeI([0, 10], 2));

console.log(smallestRangeI([1, 3, 6], 3));