// 58ms, 97.62%
// 42.2MB

const searchInsert = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] === target || nums[i] > target) {
            return i;
        }
    }
    return nums.length;
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));