// 125ms, 85.45%
// 53.5 MB

const findDisappearedNumbers = function(nums) { 
    const result = [];
    const set = new Set(nums);
    
    for(let i = 1; i <= nums.length; i++) {
        if(!set.has(i)) {
            result.push(i);
        }
    }
    
    return result;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));

console.log(findDisappearedNumbers([1,1]));