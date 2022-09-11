// 64ms, 99.34%
// 42.7 MB

const isPowerOfFour = function(n) {
    if(n <= 1) return n === 1;
    if(n % 4 !== 0) return false;
    
    return isPowerOfFour(n / 4);
};

console.log(isPowerOfFour(16));

console.log(isPowerOfFour(5));

console.log(isPowerOfFour(1));