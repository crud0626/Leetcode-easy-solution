// 81ms, 79.39%
// 44.5 MB

const findMaxConsecutiveOnes = function(nums) {
    let result = 0, count = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i]) {
            count += 1;
            continue;
        }
        
        result = Math.max(result, count);
        count = 0;
    }

    return Math.max(result, count);
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));

console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]));