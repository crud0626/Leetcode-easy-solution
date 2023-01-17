// 55ms, 99.30%
// 42.9 MB

const minMaxGame = function(nums) {
    if(nums.length === 1) return nums[0];

    const newNums = [];
    for(let i = 0; i < nums.length; i+=2) {
        newNums.push(
            newNums.length % 2 === 0 
            ? Math.min(nums[i], nums[i+1]) 
            : Math.max(nums[i], nums[i+1])
        );
    }

    return minMaxGame(newNums);
};

console.log(minMaxGame([1,3,5,2,4,8,2,2]));

console.log(minMaxGame([3]));