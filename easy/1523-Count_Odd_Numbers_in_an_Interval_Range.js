// 59ms, 97.99%
// 41.5 MB

const countOdds = function(low, high) {
    const result = (high - low) / 2;
    return low % 2 !== 0 && high % 2 !== 0 ? result + 1 : result;
};

console.log(countOdds(3, 7));

console.log(countOdds(8, 10));