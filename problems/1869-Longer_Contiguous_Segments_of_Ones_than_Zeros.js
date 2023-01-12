// 57ms, 100%
// 42.6 MB

const checkZeroOnes = function(s) {
    let longestOne = 0, longestZero = 0;

    const zeros = s.match(/0+/g) || [];
    zeros.forEach((n) => {
        if (n.length) longestZero = Math.max(longestZero, n.length);
    });

    const ones = s.match(/1+/g) || [];
    ones.forEach((n) => {
        if (n.length) longestOne = Math.max(longestOne, n.length);
    });

    return longestOne > longestZero;
};

console.log(checkZeroOnes("1101")); // true

console.log(checkZeroOnes("111000")); // false

console.log(checkZeroOnes("110100010")); // false