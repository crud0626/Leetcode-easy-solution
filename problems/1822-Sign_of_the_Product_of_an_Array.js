// 58ms, 98.11%
// 42.2 MB

const arraySign = function(nums) {
    let result = nums[0];

    for(let i = 1; i < nums.length; i++) {
        result *= nums[i];
    }

    if(result > 0) {
        return 1;
    } else if(result < 0) {
        return -1;
    } else {
        return 0;
    }
};

console.log(arraySign([-1,-2,-3,-4,3,2,1]));

console.log(arraySign([1,5,0,2,-3]));

console.log(arraySign([-1,1,-1,1,-1]));