// 59ms, 95.48%
// 41.9 MB

const divisorGame = function(n) {
    let turn = 0;
    while(n > 1) {
        turn += 1;
        for(let i = 1; i < n; i++) {
            if(n % i === 0) {
                n -= i;
                break;
            }
        }
    }

    return turn % 2 !== 0;
};

console.log(divisorGame(2));

console.log(divisorGame(3));