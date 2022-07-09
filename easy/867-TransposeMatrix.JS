// 83ms, 84.18%
// 44.9 MB

const transpose = function(matrix) {
    const result = [];

    for(let i = 0; i < matrix[0].length; i++) {
        const tempArr = [];
        for(let j = 0; j < matrix.length; j++) {
            tempArr.push(matrix[j][i]);
        }
        result.push(tempArr);
    }

    return result;
};

console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]));

console.log(transpose([[1,2,3],[4,5,6]]));