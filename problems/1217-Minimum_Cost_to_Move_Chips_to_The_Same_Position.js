// 54ms, 97.47%
// 41.9 MB

const minCostToMoveChips = function(position) {
    let even = 0, odd = 0;
    position.forEach(i => i % 2 === 0 ? even += 1 : odd += 1);

    return Math.min(even, odd);
};

console.log(minCostToMoveChips([1,2,3]));

console.log(minCostToMoveChips([2,2,2,3,3]));

console.log(minCostToMoveChips([1,1000000000]));