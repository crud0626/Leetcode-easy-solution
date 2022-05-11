// 76ms, 73.54%
// 44.2mb

const reverseBits = function(n) {
    let num = n.toString(2).split("").reverse().join("");
    num = num.padEnd(32, 0);
    return parseInt(num, 2);
};

console.log(reverseBits("00000010100101000001111010011100"));

console.log(reverseBits("11111111111111111111111111111101"));