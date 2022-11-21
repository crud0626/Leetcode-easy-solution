// 60ms, 97.74%
// 42.5 MB

const findFinalValue = function(nums, original) {
    while(true) {
        if(!nums.includes(original)) {
            break;
        }
        original *= 2;
    }
    return original;
};

console.log(findFinalValue([5,3,6,1,12], 3));

console.log(findFinalValue([2,7,9], 4));