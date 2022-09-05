// 53ms, 100%
// 42.3 MB

const threeConsecutiveOdds = function(arr) {
    let count = 3;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 !== 0) {
            count -= 1;
            if(count === 0) return true;
            continue;
        }
        count = 3;
    }

    return false;
};

console.log(threeConsecutiveOdds([2,6,4,1]));

console.log(threeConsecutiveOdds([1,2,34,3,4,5,7,23,12]));