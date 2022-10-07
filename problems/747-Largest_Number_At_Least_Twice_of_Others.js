// 67ms, 91.10%
// 41.8 MB

const dominantIndex = function(nums) {
    const maxNum = Math.max(...nums);
    const maxIndex = nums.indexOf(maxNum);
    nums.splice(maxIndex, 1);

    const secondMax = Math.max(...nums);

    return secondMax * 2 <= maxNum ? maxIndex : -1;
};

console.log(dominantIndex([3,6,1,0]));

console.log(dominantIndex([1,2,3,4]));