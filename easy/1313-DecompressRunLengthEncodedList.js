// 84ms, 92.87%
// 44.5 MB

const decompressRLElist = function(nums) {
    const result = [];

    for (let i = 0; i < nums.length; i+=2) {
        for(let j = 0; j < nums[i]; j++) {
            result.push(nums[i+1]);
        }
    }

    return result;
};

console.log(decompressRLElist([1,2,3,4]));

console.log(decompressRLElist([1,1,2,3]));