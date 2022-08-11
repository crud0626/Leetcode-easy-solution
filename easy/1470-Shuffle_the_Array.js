// 72ms, 94.22%
// 44.2 MB

const shuffle = function(nums, n) {
    let x = nums.splice(0, n);

    let newArr = [];
    for(let i = 0; i < n; i++) {
        newArr.push(x[i], nums[i]);
    }

    return newArr;
};

console.log(shuffle([2,5,1,3,4,7], 3));

console.log(shuffle([1,2,3,4,4,3,2,1], 4));

console.log(shuffle([1,1,2,2], 2));