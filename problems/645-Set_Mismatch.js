// 76ms, 96.04%
// 44.3 MB

const findErrorNums = function(nums) {
    const arr = new Array(nums.length).fill(0);
    let repeatNum = null;

    nums.forEach(n => {
        if(arr[n-1]) repeatNum = n;

        arr[n-1] = n;
    });

    return [repeatNum, arr.indexOf(0)+1];
};

console.log(findErrorNums([1,2,2,4]));

console.log(findErrorNums([1,1]));