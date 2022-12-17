// 65ms, 98.80%
// 44.3 MB

const intersection = function(nums) {
    const result = new Set(nums[0]);

    for(let i = 1; i < nums.length; i++) {
        const targetSet = new Set(nums[i]);
        const currNums = Array.from(result);

        for(let j = 0; j < currNums.length; j++) {
            if(!targetSet.has(currNums[j])) {
                result.delete(currNums[j]);
            }
        }
    }

    return Array.from(result).sort((a, b) => a - b);
};

console.log(intersection([[3,1,2,4,5], [1,2,3,4], [3,4,5,6]]));

console.log(intersection([[1,2,3], [4,5,6]]));