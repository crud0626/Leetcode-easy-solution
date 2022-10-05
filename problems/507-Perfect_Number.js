// 64ms, 98.19%
// 42.2 MB

const checkPerfectNumber = function(num) {
    if(num === 1) return false;

    let sum = 1;

    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) sum += i + num / i;
    }

    return sum === num;
};

console.log(checkPerfectNumber(28));

console.log(checkPerfectNumber(7));
