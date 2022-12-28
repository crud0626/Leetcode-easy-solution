// 61ms, 98.75%
// 42.3 MB

const fillCups = function(amount) {
    const maxNum = Math.max(...amount);

    if(maxNum === 0) return 0;

    const sum = amount[0] + amount[1] + amount[2] + 1;
    return Math.max(maxNum, Math.floor(sum / 2));
};

console.log(fillCups([1, 4, 2]));

console.log(fillCups([5, 4, 4]));

console.log(fillCups([5, 0, 0]));