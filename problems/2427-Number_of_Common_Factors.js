// 56ms, 96.55%
// 41.4 MB

const commonFactors = function(a, b) {
    let result = 0;
    const min = Math.min(a, b);

    for(let i = 1; i <= min; i++) {
        if(a % i === 0 && b % i === 0) result ++;
    }

    return result;
};

console.log(commonFactors(12, 6));

console.log(commonFactors(25, 30));