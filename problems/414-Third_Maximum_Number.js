// 63ms, 93.61%
// 44.7MB

const thirdMax = function(nums) {
    const values = Array.from(new Set(nums));
    
    if (values.length < 3) {
        return Math.max(...values);
    }

    values.sort((a, b) => b - a);
    return values[2];
};

console.log(thirdMax([3, 2, 1]));

console.log(thirdMax([1, 2]));

console.log(thirdMax([2, 2, 3, 1]));