// 78ms, 95.52%
// 46.5 MB

const prefixesDivBy5 = function(nums) {
    const result = [];
    
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {        
        sum = (sum * 2 + nums[i]) % 5;
        result.push(!sum);
    }

    return result;
};

console.log(prefixesDivBy5([0,1,1]));

console.log(prefixesDivBy5([1,1,1]));