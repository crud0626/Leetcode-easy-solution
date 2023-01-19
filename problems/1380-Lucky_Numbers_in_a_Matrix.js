// 59ms, 98.54%
// 44.3 MB

const luckyNumbers  = function(matrix) {
    const result = [];

    for(let r = 0; r < matrix.length; r++) {
        const row = matrix[r];
        const target = Math.min(...row);
        
        const targetCol = row.indexOf(target);

        let isLucky = true;
        for(let r = 0; r < matrix.length; r++) {
            if(matrix[r][targetCol] > target) {
                isLucky = false;
                break;
            }
        }
        if (isLucky) result.push(target);
    }

    return result;
};

console.log(luckyNumbers([[3,7,8], [9,11,13], [15,16,17]]));

console.log(luckyNumbers([[1,10,4,2], [9,3,8,7], [15,16,17,12]]));

console.log(luckyNumbers([[7,8], [1,2]]));