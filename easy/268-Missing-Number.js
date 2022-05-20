// 95ms, 53.19%
// 44.3mb

const missingNumber = function(nums) {
    nums.sort((a, b) => a - b);
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== i) {
            return i;
        }
    }
    return nums.length;
};

console.log(missingNumber([3,0,1]));

console.log(missingNumber([0,1]));

console.log(missingNumber([9,6,4,2,3,5,7,0,1]));
