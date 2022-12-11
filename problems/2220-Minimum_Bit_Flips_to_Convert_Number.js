// 52ms, 100%
// 42 MB

const minBitFlips = function(start, goal) {
    const newBit = (start ^ goal).toString(2);
    const result = [...newBit].filter(e => e === "1");
    return result.length;
};

console.log(minBitFlips(10, 7));

console.log(minBitFlips(3, 4));