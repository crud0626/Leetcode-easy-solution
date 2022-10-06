// 82ms, 98.86%
// 52.2 MB

const fairCandySwap = function(aliceSizes, bobSizes) {
    const set = new Set(bobSizes);
    const aliceSum = aliceSizes.reduce((a, b) => a + b, 0);
    const bobSum = bobSizes.reduce((a, b) => a + b, 0);
    const diff = (bobSum - aliceSum) / 2;

    for(let i = 0; i < aliceSizes.length; i++) {
        // y = x + (sb-sa) / 2
        const y = aliceSizes[i] + diff;

        if(set.has(y)) {
            return [aliceSizes[i], y];
        }
    }
};

console.log(fairCandySwap([1, 1], [2, 2]));

console.log(fairCandySwap([1, 2], [2, 3]));

console.log(fairCandySwap([2], [1, 3]));