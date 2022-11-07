// 59ms, 99.44%
// 42.5 MB

const findMiddleIndex = function(nums) {
    let left = 0;
    let right = nums.reduce((prev, curr) => prev + curr, 0);

    for(let i = 0; i < nums.length; i++) {
        right -= nums[i];
        if(nums[i-1]) left += nums[i-1];
        
        if(left === right) return i;
    }
    return -1
};

console.log(findMiddleIndex([2,3,-1,8,4]));

console.log(findMiddleIndex([1,-1,4]));

console.log(findMiddleIndex([2,5]));