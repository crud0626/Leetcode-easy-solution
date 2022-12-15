// 64ms, 96.77%
// 44.7 MB

const findClosestNumber = function(nums) {
    let answer = nums[0];
    
    for(let i = 1; i < nums.length; i++) {
        const absAns = Math.abs(answer), absCurr = Math.abs(nums[i]);
        
        if (
            absAns > absCurr ||
            (absAns === absCurr && answer < nums[i])
        ) {
            answer = nums[i];
        }
    }
    return answer;
};

console.log(findClosestNumber([-4,-2,1,4,8]));

console.log(findClosestNumber([2,-1,1]));