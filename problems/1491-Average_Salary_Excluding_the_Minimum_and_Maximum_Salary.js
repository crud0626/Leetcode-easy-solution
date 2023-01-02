// 42ms, 100%
// 41.9 MB

const average = function(salary) {
    salary.sort((a, b) => a - b);
    salary.pop();
    salary.shift();
    
    return salary.reduce((a, b) => a + b, 0) / salary.length;
};

console.log(average([4000,3000,1000,2000]));

console.log(average([1000,2000,3000]));