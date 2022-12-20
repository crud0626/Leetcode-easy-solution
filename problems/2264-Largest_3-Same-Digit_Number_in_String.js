// 70ms, 90.8%
// 44 MB

const largestGoodInteger = function(num) {
    let result = "";

    for(let i = 0; i < num.length-2; i++) {
        const target = num.slice(i, i+3);
        if(target[0] === target[1] && target[1] === target[2]) {
            result = result < target ? target : result;
        }
    }

    return result;
};

console.log(largestGoodInteger("6777133339"));

console.log(largestGoodInteger("2300019"));

console.log(largestGoodInteger("42352338"));