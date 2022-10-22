// 62ms, 98.27%
// 45MB

const search = function(nums, target) {
    let left = 0, right = nums.length - 1;
    
    while(left <= right) {
        const medium = Math.floor((left + right) / 2), midNum = nums[medium];

        if(midNum === target) return medium;
        
        if(midNum < target) {
            left = medium + 1;
        } else {
            right = medium - 1;
        }
    }

    return -1;
};

console.log(search([-1,0,3,5,9,12], 9));

console.log(search([-1,0,3,5,9,12], 2));
