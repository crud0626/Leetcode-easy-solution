// 70ms, 94.14%
// 43.9 MB

const minOperations = function(nums) {
    let count = 0;

    for(let i = 0; i < nums.length - 1; i++) {
        if(nums[i] >= nums[i+1]) {
            const diffNum = (nums[i] - nums[i+1]) + 1;
            nums[i+1] += diffNum;
            count += diffNum;
        }
    }
    return count;
};

console.log(minOperations([1, 1, 1]));

console.log(minOperations([1, 5, 2, 4, 1]));

console.log(minOperations([8]));