// 72ms, 96.73%
// 44.1 MB

const canBeEqual = function(target, arr) {
    for(let i = 0; i < target.length; i++) {
        if(!arr.includes(target[i])) {
            return false;
        }
        target.splice(i, 1);
        arr.splice(arr.indexOf(target[i]), 1);
    }
    return true;
};

console.log(canBeEqual([1,2,3,4], [2,4,1,3]));

console.log(canBeEqual([7], [7]));

console.log(canBeEqual([3,7,9], [3,7,11]));