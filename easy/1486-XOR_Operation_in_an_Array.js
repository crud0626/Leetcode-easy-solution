// 60ms, 97.85%
// 42.1 MB

const xorOperation = function(n, start) {
    let result = start;

    for(let i = 1; i < n; i++) {
        const currentNum = start + 2 * i;
        result = result ^ currentNum;
    }

    return result;
};

console.log(xorOperation(5, 0));

console.log(xorOperation(4, 3));