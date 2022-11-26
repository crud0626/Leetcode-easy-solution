// 74ms, 86.29%
// 42 MB

const minimumCost = function(cost) {
    let result = 0;
    cost.sort((a, b) => b - a);

    for(let i = 0; i < cost.length; i += 3) {
        const first = cost[i], second = cost[i+1] || 0;
        result += first + second;
    }

    return result;
};

console.log(minimumCost([1,2,3]));

console.log(minimumCost([6,5,7,9,2,2]));

console.log(minimumCost([5,5]));