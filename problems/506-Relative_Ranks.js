// 72ms, 98.97%
// 44.8 MB

const findRelativeRanks = function(score) {
    const medals = ["Gold Medal", "Silver Medal", "Bronze Medal"];
    const map = new Map();
    const ranks = [...score];
    ranks.sort((a, b) => b - a).forEach((a, i) => map.set(a, i+1));

    return score.map(s => {
        const rank = map.get(s);
        if(1 <= rank && rank <= 3) {
            return medals[rank-1];
        }

        return rank.toString();
    });
};

console.log(findRelativeRanks([5, 4, 3, 2, 1]));

console.log(findRelativeRanks([10, 3, 8, 9, 4]));