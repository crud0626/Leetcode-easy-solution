// 61ms, 93.35%
// 41.9 MB

const guessNumber = function(n) {
    let left = 0, right = n;
    
    while(true) {
        const center = Math.floor((left + right) / 2);
        const position = guess(center);
        if(position === -1) {
            right = center - 1;
        } else if (position === 1) {
            left = center + 1;
        } else {
            return center;
        }
    }
};

console.log(guessNumber(10, 6));

console.log(guessNumber(1, 1));

console.log(guessNumber(2, 1));