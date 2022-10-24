// 54ms, 100%
// 42.3 MB

const maxAscendingSum = function(nums) {
    let result = 0;

    let temp = nums[0];
    for(let i = 1; i <= nums.length; i++) {
        if(nums[i] > nums[i-1]) {
            temp += nums[i];
        } else {
            result = Math.max(result, temp);
            temp = nums[i];
        }

    }

    return result;
};

console.log(maxAscendingSum([10,20,30,5,10,50]));

console.log(maxAscendingSum([10,20,30,40,50]));

console.log(maxAscendingSum([12,17,15,13,10,11,12]));