// 75ms, 74.48%
// 42.3 MB

const buildArray = function(target, n) {
    const maxNum = Math.max(...target);
    const result = [];
    for(let i = 1; i <= maxNum; i++) {
        result.push("Push");
        if(!target.includes(i)) {
            result.push("Pop");
        }
    }

    return result;
};

console.log(buildArray([1, 3], 3));

console.log(buildArray([1, 2, 3], 3));

console.log(buildArray([1, 2], 4));