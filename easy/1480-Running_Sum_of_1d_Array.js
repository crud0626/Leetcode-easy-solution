// 64ms, 94.16%
// 42.4 MB

const runningSum = function(nums) {
    const result = [];
    let temp = 0;
    for(let i = 0; i < nums.length; i++) {
        temp += nums[i];
        result.push(temp);
    }
    return result;
};

console.log(runningSum([1,2,3,4]));

console.log(runningSum([1,1,1,1,1]));

console.log(runningSum([3,1,2,10,1]));