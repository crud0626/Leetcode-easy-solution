// 61ms, 97.56%
// 42.2 MB

const digitSum = function(s, k) {
    while(s.length > k) {
        let newS = "";
        for(let i = 0; i < s.length; i+=k) {
            const targetNum = [...s.slice(i, i+k)];
            const totalNum = targetNum.reduce((prev, curr) => parseInt(prev) + parseInt(curr));
            newS += `${totalNum}`;
        }
        s = newS;
    }
    return s;
};

console.log(digitSum("11111222223", 3));

console.log(digitSum("00000000", 3));