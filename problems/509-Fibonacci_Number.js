// 81ms, 64.63%
// 41.6MB

const fib = function(n) {
    if (n === 0 || n === 1) return n;
    
    return fib(n-1) + fib(n-2);
};

console.log(fib(2));

console.log(fib(3));

console.log(fib(4));