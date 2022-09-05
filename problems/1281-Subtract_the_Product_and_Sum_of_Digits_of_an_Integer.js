// 68ms, 84.25%
// 42MB

const subtractProductAndSum = function(n) {
    n = n.toString();

    let sum = +n[0], digit = +n[0];

    for (let i = 1; i < n.length; i++) {
        sum += +n[i];
        digit *= +n[i];
    }
    
    return digit - sum;
};

console.log(subtractProductAndSum(234));

console.log(subtractProductAndSum(4421));