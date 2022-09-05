// 75ms, 82.95%
// 43.2 MB

const findKthPositive = function(arr, k) {
    const missNums = [];
    let count = 1;
    while (missNums.length !== k) {
        if(!arr.includes(count)) {
            missNums.push(count);
        }
        count += 1;
    }

    return missNums.pop();
};

console.log(findKthPositive([2,3,4,7,11], 5));

console.log(findKthPositive([1,2,3,4], 2));