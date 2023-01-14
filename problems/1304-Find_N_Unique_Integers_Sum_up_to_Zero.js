// 65ms, 90.14%
// 42.7 MB

const sumZero = function(n) {
    const result = [0];

    for(let i = 1; i <= n / 2; i++) {
        result.push(i, -i);
    }

    if(n % 2 === 0) result.shift();

    return result;
};

console.log(sumZero(5));

console.log(sumZero(3));

console.log(sumZero(1));