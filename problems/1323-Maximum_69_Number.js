// 64ms, 89.41%
// 42MB

const maximum69Number  = function(num) {
    num = num.toString().split("");
    
    const index = num.indexOf("6");
    if (index !== -1) {
        num[index] = "9";
    }
    return +num.join("");
};

console.log(maximum69Number(9669));

console.log(maximum69Number(9996));

console.log(maximum69Number(9999));