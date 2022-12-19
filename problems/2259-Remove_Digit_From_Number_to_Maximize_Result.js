// 63ms, 91.29%
// 43.9 MB

const removeDigit = function(number, digit) {
    let result = BigInt(0);
    const regex = new RegExp(digit, "g");
    const matched = [...number.matchAll(regex)];

    matched.forEach(({ index }) => {
        const targetNum = number.split("");
        targetNum.splice(index, 1);
        
        const convertNum = BigInt(targetNum.join(""));
        result = convertNum > result ? convertNum : result;
    });

    return result.toString();
};

console.log(removeDigit("123", "3"));

console.log(removeDigit("1231", "1"));

console.log(removeDigit("551", "5"));