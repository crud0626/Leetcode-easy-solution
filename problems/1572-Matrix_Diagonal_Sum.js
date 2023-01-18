// 61ms, 92.17%
// 42.7 MB

const diagonalSum = function(mat) {
    let sum = 0;

    let right = mat[0].length-1;
    
    mat.forEach((row, left) => {
        const temp = row[left] + row[right];
        sum += left === right ? temp / 2 : temp;

        right -= 1;
    });

    return sum;
};

console.log(diagonalSum([[1,2,3], [4,5,6], [7,8,9]]));

console.log(diagonalSum([[1,1,1,1], [1,1,1,1], [1,1,1,1], [1,1,1,1]]));

console.log(diagonalSum([[5]]));