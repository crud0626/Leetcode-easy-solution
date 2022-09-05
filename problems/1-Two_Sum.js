// 102ms, 58.46%
// 42.4 MB

const twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            const addedNum = nums[i] + nums[j];
            if(addedNum === target) {
                return [i, j];
            }
        }
    }
};

console.log(twoSum([2,7,11,15], 9));

console.log(twoSum([3,2,4], 6));

console.log(twoSum([3, 3], 6));