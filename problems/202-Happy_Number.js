// 78ms, 68.21%
// 44.5mb

const isHappy = function(n) {
    const record = [];
    while(n !== 1) {
        if(record.includes(n)) return false;
        record.push(n);
        const arr = n.toString().split("");
        n = arr.reduce((prev, curr) => prev += parseInt(curr) ** 2, 0);
    }
    return true;
};

console.log(isHappy(19));

console.log(isHappy(2));