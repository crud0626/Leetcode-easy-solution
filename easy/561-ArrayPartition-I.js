// 118ms, 97.51%
// 47.5 MB

const arrayPairSum = function(nums) {
    let result = 0;
    nums.sort((a, b) => a - b);

    for(let i = 0; i < nums.length; i += 2) {
        result += nums[i];
    }
    return result;
};

console.log(arrayPairSum([1,4,3,2]));

console.log(arrayPairSum([6,2,6,5,1,2]));