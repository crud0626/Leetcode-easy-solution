// 63ms, 93.36%
// 41.5 MB

const numIdenticalPairs = function(nums) {
    let count = 0;

    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) count += 1;
        }
    }
    return count;
};

console.log(numIdenticalPairs([1,2,3,1,1,3]));

console.log(numIdenticalPairs([1,1,1,1]));

console.log(numIdenticalPairs([1,2,3]));