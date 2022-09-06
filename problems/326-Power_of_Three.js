// 268ms, 80.37%
// 51.3 MB

const isPowerOfThree = function(n) {
    if(n <= 1) return n === 1;
    if(n % 3 !== 0) return false;
    
    return isPowerOfThree(n/3);
};

console.log(isPowerOfThree(27));

console.log(isPowerOfThree(0));

console.log(isPowerOfThree(-1));