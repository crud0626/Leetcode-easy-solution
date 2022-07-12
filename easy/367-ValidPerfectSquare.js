// 65ms, 90.53%
// 42 MB

const isPerfectSquare = function(num) {
    return num ** 0.5 % 1 === 0;
};

console.log(isPerfectSquare(16));

console.log(isPerfectSquare(14));