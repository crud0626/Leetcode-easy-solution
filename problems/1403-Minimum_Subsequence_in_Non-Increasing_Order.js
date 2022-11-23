// 83ms, 81.31%
// 44.4 MB

const minSubsequence = function(nums) {
    const result = [];
    nums.sort((a, b) => b - a);
    let sum = 0, restSum = nums.reduce((a, b) => a + b, 0);
    
    for(let i = 0; i < nums.length; i++) {
        const target = nums[i];
        result.push(target);
        sum += target;
        restSum -= target;
            
        if(sum > restSum) break;
    }
    
    return result;
};

console.log(minSubsequence([4,3,10,9,8]));

console.log(minSubsequence([4,4,7,6,7]));