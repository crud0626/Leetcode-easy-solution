// 78ms, 88.96%
// 45.1 MB

const shortestToChar = function(s, c) {
    const result = [];
    const temp = s.split("");

    let prevIndex = temp.indexOf(c);
    let nextIndex = temp.includes(c, prevIndex + 1) ? temp.indexOf(c, prevIndex + 1) : Infinity;
    
    for(let i = 0; i < s.length; i++) {
        if(c === temp[i]) {
            result.push(0);
            
            if(nextIndex <= i) {
                prevIndex = nextIndex;
                nextIndex = temp.includes(c, prevIndex + 1) ? temp.indexOf(c, prevIndex + 1) : Infinity;
            }
        } else {
            const prev = Math.abs(i - prevIndex);
            const next = Math.abs(i - nextIndex);
            result.push(Math.min(prev, next));
        }
    }

    return result;
};

console.log(shortestToChar("loveleetcode", "e"));

console.log(shortestToChar("aaab", "b"));