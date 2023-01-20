// 59ms, 95.70%
// 47.5 MB

const sumOddLengthSubarrays = function(arr) {
    let sum = 0;

    for(let len = 1; len <= arr.length; len+=2) {
        const maxStart =  arr.length - len;
        
        for(let start = 0; start <= maxStart; start++) {
            const tempArr = arr.slice(start, start + len);
            sum += tempArr.reduce((p, c) => p + c, 0);
        }
    }

    return sum;
};

console.log(sumOddLengthSubarrays([1,4,2,5,3]));

console.log(sumOddLengthSubarrays([1,2]));

console.log(sumOddLengthSubarrays([10, 11, 12]));