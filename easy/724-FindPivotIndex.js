// 66ms, 99.26%
// 44.1 MB

const pivotIndex = function(nums) {
    const sum = nums.reduce((prev, curr) => prev + curr, 0);
    let temp = 0;
    
    for(let i = 0; i < nums.length; i++) {
        const rightSum = sum - nums[i] - temp;
        if(rightSum === temp) {
            return i;
        }

        temp += nums[i];
    }
    return -1;
};

console.log(pivotIndex([1,7,3,6,5,6]));

console.log(pivotIndex([1,2,3]));

console.log(pivotIndex([2,1,-1]));