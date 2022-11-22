// 56ms, 99.13%
// 41.9 MB

const minimumSum = function(num) {
    const arr = [...num.toString()];
    arr.sort();
    return Number(arr[0] + arr[2]) + Number(arr[1] + arr[3]);
};

console.log(minimumSum(2932));

console.log(minimumSum(4009));
