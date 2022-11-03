// 68ms, 89.67%
// 42.3 MB

const isThree = function(n) {
    let count = 0;
    for(let i = 1; i <= n; i++) {
        if(n % i === 0) count += 1;
    }
    return count === 3 ? true : false;
};

console.log(isThree(2));

console.log(isThree(4));