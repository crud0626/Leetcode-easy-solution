// 56ms, 98.69%
// 42.5 MB

const numberOfSteps = function(num) {
    let count = 0;
    while(num !== 0) {
        count ++;
        num = num % 2 === 0 ? num / 2 : num - 1;
    }
    return count;
};

console.log(numberOfSteps(14));

console.log(numberOfSteps(8));

console.log(numberOfSteps(123));