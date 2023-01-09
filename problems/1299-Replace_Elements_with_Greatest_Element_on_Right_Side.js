// 171ms, 85.32%
// 50.8 MB

const replaceElements = function(arr) {
    const result = new Array(arr.length);
    let greatestNum = arr.at(-1);

    for(let i = arr.length-2; 0 <= i; i--) {
        result[i] = greatestNum;
        
        if(arr[i] > greatestNum) {
            greatestNum = arr[i];
        }
    }

    result[result.length-1] = -1;

    return result;
};

console.log(replaceElements([17,18,5,4,6,1]));

console.log(replaceElements([400]));