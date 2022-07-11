// 94ms, 86.36%
// 45.1 MB

const diStringMatch = function(s) {
    const result = [];
    let min = 0, max = s.length;

    for(let i = 0; i <= s.length; i++) {
        result.push(s[i] === "I" ? min++ : max--);
    }
    return result;
};

console.log(diStringMatch("IDID"));

console.log(diStringMatch("III"));

console.log(diStringMatch("DDI"));