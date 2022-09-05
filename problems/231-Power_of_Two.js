// 77ms, 91.80%
// 43.5 MB

const isPowerOfTwo = function(n) {
    let num = 0, count = 0;

    while(num < n) {
        num = 2 ** count;
        count += 1;

        if(num === n) return true;
    }
    return false;
};

console.log(isPowerOfTwo(1));

console.log(isPowerOfTwo(16));

console.log(isPowerOfTwo(3));