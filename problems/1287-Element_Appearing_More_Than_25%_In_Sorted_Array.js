// 72ms, 80%
// 44.3 MB

const findSpecialInteger = function(arr) {
    const obj = {};
    const quarter = arr.length * 0.25;
    
    for(let i = 0; i < arr.length; i++) {
        const target = arr[i];
        obj[target] = obj[target] ? obj[target] + 1  : 1;

        if(obj[target] > quarter) {
            return target;
        }
    }
};

console.log(findSpecialInteger([1,2,2,6,6,6,6,7,10]));

console.log(findSpecialInteger([1,1]));