// 73ms, 85.30%
// 43.3 MB

const sumOfUnique = function(nums) {
    let result = 0;
    
    for(let i = 0; i < nums.length; i++) {
        const arr = [...nums];
        const target = arr[i];
        arr.splice(i, 1);
        if(!arr.includes(target)) {
            result += target;
        }
    }

    return result;
};

console.log(sumOfUnique([1,2,3,2]));

console.log(sumOfUnique([1,1,1,1,1]));

console.log(sumOfUnique([1,2,3,4,5]));