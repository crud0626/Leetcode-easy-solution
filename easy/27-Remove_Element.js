// 61ms, 95.64%
// 42 MB

const removeElement = function(nums, val) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === val) {
            nums.splice(i, 1);
            i -= 1;
        }
    }

    return nums.length;
};

console.log(removeElement([3,2,2,3], 3));

console.log(removeElement([0,1,2,2,3,0,4,2], 2));