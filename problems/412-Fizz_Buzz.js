// 61ms, 97.77%
// 44.6 MB

const fizzBuzz = function(n) {
    const result = [];
    for(let i = 1; i <= n; i++) {
        switch(true) {
            case i % 15 === 0:
                result.push("FizzBuzz");
                break;
            case i % 5 === 0:
                result.push("Buzz");
                break;
            case i % 3 === 0:
                result.push("Fizz");
                break;
            default:
                result.push(i+"");
                break;
        }
    }
    return result;
};

console.log(fizzBuzz(3));

console.log(fizzBuzz(5));

console.log(fizzBuzz(15));