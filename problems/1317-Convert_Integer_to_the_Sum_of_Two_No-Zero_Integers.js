// 61ms, 97.6%
// 42.2 MB

const getNoZeroIntegers = function(n) {
    for(let i = 1; i < n; i++) {
        const temp = `${i}${n-i}`;
        if(!temp.match(/0/)) return [i, n - i];
    }
};

console.log(getNoZeroIntegers(2));

console.log(getNoZeroIntegers(11));