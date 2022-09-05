// 104ms, 86.10%
// 46.7 MB

const moveZeroes = function(nums) {
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            nums.splice(i, 1);
            count ++;
            i --;
        }
    }

    nums.push(...new Array(count).fill(0));
};

console.log(moveZeroes([0,1,0,3,12]));

console.log(moveZeroes([0]));