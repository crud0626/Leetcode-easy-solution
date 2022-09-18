// 134ms, 72.33%
// 47 MB

const maximumProduct = function(nums) {
    nums.sort((a, b) => a - b);
    const arr1 = nums[0] * nums[1] * nums.at(-1);
    const arr2 = nums.at(-3) * nums.at(-2) * nums.at(-1);
    return Math.max(arr1, arr2);
};

console.log(maximumProduct([1, 2, 3]));

console.log(maximumProduct([1, 2, 3, 4]));

console.log(maximumProduct([-1, -2, -3]));