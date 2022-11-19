// 71ms, 84.16%
// 42.4 MB

const isSameAfterReversals = function(num) {
    return num === 0 || num % 10 !== 0 ? true : false;
};

console.log(isSameAfterReversals(526));

console.log(isSameAfterReversals(1800));

console.log(isSameAfterReversals(0));