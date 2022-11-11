// 64ms, 96.12%
// 42MB

const minimumMoves = function(s) {
    let count = 0;

    for(let i = 0; i < s.length; i++) {
        if(s[i] === "X") {
            count += 1;
            i += 2;
        }
    }

    return count;
};

console.log(minimumMoves("XXX"));

console.log(minimumMoves("XXOX"));

console.log(minimumMoves("OOOO"));