// 69ms, 84.27%
// 42.2 MB

const plusOne = function(digits) {
    const added = BigInt(digits.join("")) + BigInt(1);
    return added.toString().split("");
};

console.log(plusOne([1, 2, 3]));

console.log(plusOne([4, 3, 2 ,1]));

console.log(plusOne([9]));