// 62ms, 94.41%
// 41.4 MB

const sumBase = function(n, k) {
    let result = 0;
    
    const num = n.toString(k);
    for(let i = 0; i < num.length; i++) {
        result += +num[i];
    }

    return result;
};

console.log(sumBase(34, 6));

console.log(sumBase(10, 10));