// 43ms, 100%
// 42.9 MB

const findNumbers = function(nums) {
    let count = 0;

    for (let i=0; i < nums.length; i++) {
        const target = nums[i].toString();
        if (target.length % 2 === 0) {
            count += 1;
        }
    }
    
    return count;
};

console.log(findNumbers([12,345,2,6,7896]));

console.log(findNumbers([555,901,482,1771]));