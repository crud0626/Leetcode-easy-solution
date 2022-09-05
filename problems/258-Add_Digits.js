// 68ms, 96.51%
// 44.1mb

const addDigits = function(num) {
    while(num > 9) {
        const arr = num.toString().split("");
        num = arr.reduce((p, c) => Number(p) + Number(c));
    }
    return num;
};

console.log(addDigits(38));

console.log(addDigits(0));