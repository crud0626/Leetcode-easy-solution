// 70ms, 95.52%
// 42 MB

const addStrings = function(num1, num2) {
    num1 = BigInt(num1);
    num2 = BigInt(num2);
    return (num1 + num2).toString();
};

console.log(addStrings("11", "123"));

console.log(addStrings("456", "77"));

console.log(addStrings("0", "0"));