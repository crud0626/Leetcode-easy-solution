// 61ms, 94.71%
// 41.6 MB

const bitwiseComplement = function(n) {
    const bitN = n.toString(2);
    const flipedBit = bitN.replace(/[01]/g, (matched) => matched === "1" ? "0" : "1");
    return parseInt(flipedBit, 2);
};

console.log(bitwiseComplement(5));

console.log(bitwiseComplement(7));

console.log(bitwiseComplement(10));