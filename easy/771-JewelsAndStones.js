// 64ms, 94.80%
// 40.2 MB

const numJewelsInStones = function(jewels, stones) {
    let count = 0;
    for(let i = 0; i < jewels.length; i++) {
        const char = new RegExp(jewels[i], "g");
        const result = stones.match(char);
        if (result) count+=result.length;
    }
    return count;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));

console.log(numJewelsInStones("z", "ZZ"));