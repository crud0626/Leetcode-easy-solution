// 69ms, 93.63%
// 41.9 MB

const findGCD = function(nums) {
    const min = Math.min(...nums);
    const max = Math.max(...nums);

    for(let i = min; i > 0; i--) {
        if(max % i === 0 && min % i === 0) {
            return i;
        }
    }
};

console.log(findGCD([2,5,6,9,10]));

console.log(findGCD([7,5,6,8,3]));

console.log(findGCD([3,3]));