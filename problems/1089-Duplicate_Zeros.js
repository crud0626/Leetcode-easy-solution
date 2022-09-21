// 70ms, 97.87%
// 44.8 MB

const duplicateZeros = function(arr) {
    const len = arr.length;
    for(let i = 0; i < len; i++) {
        if(arr[i] === 0) {
            arr.splice(i, 0, 0);
            arr.pop();
            i++;
        }
    }
};

console.log(duplicateZeros([1,0,2,3,0,4,5,0]));

console.log(duplicateZeros([1,2,3]));