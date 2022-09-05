// 101ms, 74.36%
// 49.8mb

const countBits = function(n) {
    const result = [0];
    for (let i = 1; i <= n; i++) {
        const num = i.toString(2);
        let count = 0;
        for(let j = 0; j < num.length; j++) {
            if(num[j] === "1") {
                count += 1;
            }
        }
        if (count !== 0) result.push(count);
    }
    return result;
};

console.log(countBits(2));

console.log(countBits(5));