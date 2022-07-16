// 78ms, 75.07%
// 43 MB

const lastStoneWeight = function(stones) {

    while(stones.length > 1) {
        stones.sort((a, b) => a - b);

        const x = stones.pop();
        const y = stones.pop();

        const destroyed = Math.abs(y - x);
        if (destroyed !== 0) stones.push(destroyed);
    }

    return stones.length === 1 ? stones[0] : 0;
};

console.log(lastStoneWeight([2,7,4,1,8,1]));

console.log(lastStoneWeight([1]));