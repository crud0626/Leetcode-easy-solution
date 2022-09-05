// 59ms, 96.07%
// 42.3 MB

const balancedStringSplit = function(s) {
    const lr = {
        "L": 0,
        "R": 0
    };

    let count = 0;

    for(let i = 0; i < s.length; i++) {
        s[i] === 'L' ? lr.L += 1 : lr.R += 1;

        if(lr.L === lr.R) {
            count += 1;
        }
    }
    return count;
};

console.log(balancedStringSplit("RLRRLLRLRL"));

console.log(balancedStringSplit("RLRRRLLRLL"));

console.log(balancedStringSplit("LLLLRRRR"));