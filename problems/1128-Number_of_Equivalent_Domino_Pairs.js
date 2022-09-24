// 76ms, 100%
// 52.4 MB

const numEquivDominoPairs = function(dominoes) {
    let count = 0;
    const map = new Map();

    for(let i = 0; i < dominoes.length; i++) {
        const [a, b] = dominoes[i];
        const low = a > b ? b.toString() : a.toString();
        const high = a > b ? a.toString() : b.toString();

        const key = high + low;

        if(map.has(key)) {
            const prevValue = map.get(key);
            map.set(key, prevValue + 1);
            count += prevValue + 1;
        } else {
            map.set(key, 0);
        }
    }

    return count;
};

console.log(numEquivDominoPairs([[1,2],[2,1],[3,4],[5,6]]));

console.log(numEquivDominoPairs([[1,2],[1,2],[1,1],[1,2],[2,2]]));