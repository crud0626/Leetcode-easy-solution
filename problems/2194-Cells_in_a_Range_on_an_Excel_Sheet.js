// 72ms, 96.30%
// 44 MB 

const cellsInRange = function(s) {
    const result = [];
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const [rowStart, colStart, _, rowEnd, colEnd] = s;

    for(let r = alphabet.indexOf(rowStart); r <= alphabet.indexOf(rowEnd); r++) {
        for(let c = colStart; c <= colEnd; c++) {
            result.push(`${alphabet[r]}${c}`);
        }
    }

    return result;
}

console.log(cellsInRange("K1:L2"));

console.log(cellsInRange("A1:F1"));
