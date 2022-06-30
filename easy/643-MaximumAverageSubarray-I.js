// 120ms, 68.78%
// 54.2 MB
// Algorithm : Sliding window 

const findMaxAverage = (nums, k) => {
    let maxNum = -Infinity;
    let sum = 0, windowStart = 0;

    for(let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        sum += nums[windowEnd];
        
        if(windowEnd - windowStart === k - 1) {
            maxNum = Math.max(maxNum, sum);
            sum -= nums[windowStart];
            windowStart += 1;
        }
    }

    return maxNum / k;
}

console.log(findMaxAverage([1,12,-5,-6,50,3], 4));

console.log(findMaxAverage([5], 1));