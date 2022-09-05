// 164ms, 95.30%
// 53.5 MB

const minimumAbsDifference = function(arr) {
    let result = [];
    let minDiff = null;

    arr.sort((a, b) => a - b);

    for(let i = 0; i < arr.length-1; i++) {
        const diffNum = Math.abs(arr[i+1] - arr[i]);
        if(minDiff === null || diffNum < minDiff) {
            minDiff = diffNum;
            result = [[arr[i], arr[i+1]]];
        } else if(diffNum === minDiff) {
            result.push([arr[i], arr[i+1]]);
        } else {}
        
    }

    return result;
};

console.log(minimumAbsDifference([4,2,1,3]));

console.log(minimumAbsDifference([1,3,6,10,15]));

console.log(minimumAbsDifference([3,8,-10,23,19,-4,-14,27]));