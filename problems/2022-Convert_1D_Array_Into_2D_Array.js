// 287ms, 82.10%
// 66.4 MB

const construct2DArray = function(original, m, n) {
    if(original.length === m*n) {
        const result = [];

        for(let i = 0; i < m*n; i += n) {
            result.push(original.slice(i, i + n));
        }

        return result;
    }

    return [];
};

console.log(construct2DArray([1,2,3,4], 2, 2));

console.log(construct2DArray([1,2,3], 1, 3));

console.log(construct2DArray([1,2], 1, 1));