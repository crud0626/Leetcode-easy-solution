// 56ms, 98.87%
// 41.5 MB

const arithmeticTriplets = function(nums, diff) {
    let result = 0;
    const set = new Set(nums);

    for(let i=0; i < nums.length; i++) {
        const n = nums[i];

        if(set.has(n + diff) && set.has(n + diff * 2)) {
            result ++;
        }
    }

    return result;
};

console.log(arithmeticTriplets([0,1,4,6,7,10], 3));

console.log(arithmeticTriplets([4,5,6,7,8,9], 2));