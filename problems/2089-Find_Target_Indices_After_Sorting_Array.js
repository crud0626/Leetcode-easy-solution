// 68ms, 96.19%
// 44.2 MB

const targetIndices = function(nums, target) {
    nums.sort((a, b) => a - b);
    const result = [];
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === target) {
            result.push(i);
        }
    }

    return result;
};

console.log(targetIndices([1,2,5,2,3], 2));

console.log(targetIndices([1,2,5,2,3], 3));

console.log(targetIndices([1,2,5,2,3], 5));
