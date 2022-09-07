// 68ms, 94.70%
// 41.9 MB

const addBinary = function(a, b) {
    const binaryA = BigInt(`0b${a}`);
    const binaryB = BigInt(`0b${b}`);
    const sum = binaryA + binaryB;
    return sum.toString(2);
};

console.log(addBinary("11", "1"));

console.log(addBinary("1010", "1011"));