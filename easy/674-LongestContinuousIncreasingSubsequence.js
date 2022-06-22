// 65ms, 92.88%
// 42.6 MB

const findLengthOfLCIS = function(nums) {
    let result = 0, count = 1;
  
    for(let i = 0; i < nums.length; i++) {
      if(nums[i] > nums[i-1]) {
        result = Math.max(result, ++count);
      } else {
        result = Math.max(result, count);
        count = 1;
      }
    }
    return result;
};

console.log(findLengthOfLCIS([1,3,5,4,7]));

console.log(findLengthOfLCIS([2,2,2,2,2]));