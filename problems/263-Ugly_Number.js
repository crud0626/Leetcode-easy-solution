// 79ms, 84.12%
// 43.5 MB

const isUgly = function(n) {
    if(n === 1) return true;
    if(n < 1) return false;

    const primeNums = [2, 3, 5];

    for(let i = 0; i < primeNums.length; i++) {
        if(n % primeNums[i] === 0) {
            return isUgly(n / primeNums[i]);
        }
    }

    return false;
};

console.log(-10 % 1);