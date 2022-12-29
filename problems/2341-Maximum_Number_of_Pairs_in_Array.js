// 63ms, 93.50%
// 42.3 MB

const numberOfPairs = function(nums) {
    let numOfPairs = 0;
    const set = new Set();

    for(let i = 0; i < nums.length; i++) {
        if(!set.has(nums[i])) {
            set.add(nums[i]);
            continue;
        }
        
        numOfPairs ++;
        set.delete(nums[i]);
    }

    return [numOfPairs, set.size];
};

console.log(numberOfPairs([1,3,2,1,3,2,2]));

console.log(numberOfPairs([1,1]));

console.log(numberOfPairs([0]));