// 90ms, 50.34%
// 43.9mb

const majorityElement = function(nums) {
    const times = nums.length / 2;
    const obj = {};

    for(let i = 0; i < nums.length; i++) {
        if(!obj[nums[i]]) {
            obj[nums[i]] = 1;
        } else {
            obj[nums[i]] += 1;
        }

        if(obj[nums[i]] > times) {
            return nums[i];
        }
    }
};

console.log(majorityElement([3,2,3]));

console.log(majorityElement([2,2,1,1,1,2,2]));