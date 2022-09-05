// 77ms, 81.88%
// 43.6 MB

const maxProduct = function(nums) {
    nums.sort((a, b) => b - a);
    return (nums[0]-1) * (nums[1]-1);
};

console.log(maxProduct([3,4,5,2]));

console.log(maxProduct([1,5,4,5]));

console.log(maxProduct([3,7]));