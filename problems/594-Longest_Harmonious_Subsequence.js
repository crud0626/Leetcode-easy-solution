// 135ms, 82.76%
// 52.9 MB

const findLHS = function(nums) {
    const obj = {};

    for(let i = 0; i < nums.length; i++) {
        const target = obj[nums[i]];
        obj[nums[i]] = target ? target + 1 : 1;
    }

    let result = 0;

    for(key in obj) {
        key = parseInt(key);
        if (obj[key] && obj[key+1]) {
        result = Math.max(result, obj[key] + obj[key + 1]);
        }
    }

    return result;
};

console.log(findLHS([1,3,2,2,5,2,3,7]));

console.log(findLHS([1,2,3,4]));

console.log(findLHS([1,1,1,1]));