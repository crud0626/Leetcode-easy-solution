// 137ms, 32.18%
// 45.1mb

const removeDuplicates = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i+1]) {
            nums.splice(i, 1);
            i -= 1;
        }
    }

    return nums.length;
};

console.log(removeDuplicates([1,1,2]));

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));