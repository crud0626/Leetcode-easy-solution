// 112ms, 51.72%
// 43.7MB

const arrangeCoins = function(n) {
    let row = 0;
    for(let i = 1; i <= n; i++) {
        if(n - i < 0) {
            return row;
        }
        n = n - i;
        row += 1;
    }
    return row;
};

console.log(arrangeCoins(5));

console.log(arrangeCoins(8));