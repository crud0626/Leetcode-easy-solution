// 96ms, 83.07%
// 43.9 MB

const smallerNumbersThanCurrent = function(nums) {
    const sortArr = [...nums].sort((a,b) => a-b);
    return nums.map(num => sortArr.indexOf(num));
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]));

console.log(smallerNumbersThanCurrent([6,5,4,8]));

console.log(smallerNumbersThanCurrent([7,7,7,7]));