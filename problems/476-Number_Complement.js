// 65ms, 81.66%
// 41.6MB

const findComplement = function(num) {
    num = num.toString(2);
    num = num.replace(/[01]/g, a => a === "1" ? "0" : "1");
    return parseInt(num, 2);
};

console.log(findComplement(5));

console.log(findComplement(1));