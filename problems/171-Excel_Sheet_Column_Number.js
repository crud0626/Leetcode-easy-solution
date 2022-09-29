// 70ms, 97.04%
// 43.4 MB

const titleToNumber = function(columnTitle) {
    const arr = columnTitle.split("");
    let result = 0;
    let multiple = 1;

    while(arr.length > 0) {
        const target = arr.pop();
        result += (target.charCodeAt() - 64) * multiple;
        multiple *= 26;
    }

    return result;
};

console.log(titleToNumber("A"));

console.log(titleToNumber("AB"));

console.log(titleToNumber("ZY"));