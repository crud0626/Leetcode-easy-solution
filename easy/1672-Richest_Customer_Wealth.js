// 72ms, 80.38%
// 38.8 MB

const maximumWealth = function(accounts) {
    const result = new Array(accounts.length).fill(0);

    accounts.map((account, index) => {
        let num = account.reduce((a, b) => a + b);
        result[index] = num;
    })

    return Math.max(...result);
};

console.log(maximumWealth([[1,2,3],[3,2,1]]));

console.log(maximumWealth([[1,5],[7,3],[3,5]]));

console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]));