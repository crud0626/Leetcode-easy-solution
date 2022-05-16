// 80ms, 95.64%
// 51mb

const containsDuplicate = function(nums) {
    const numSet = new Set(nums);
    return numSet.size === nums.length ? false : true;
};

console.log(containsDuplicate([1,2,3,1]));

console.log(containsDuplicate([1,2,3,4]));

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));