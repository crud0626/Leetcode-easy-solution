// 64ms, 97.67%
// 42.5 MB

const makeGood = function(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        stack.push(s[i]);

        if(stack.length === 1) continue;

        let lastCode = stack[stack.length-1].charCodeAt();
        let secondLastCode = stack[stack.length-2].charCodeAt();
        lastCode = lastCode > secondLastCode ? lastCode - 32 : lastCode + 32;

        if (lastCode === secondLastCode) {
            stack.pop();
            stack.pop();
        }
    }

    return stack.join("");
};

console.log(makeGood("leEeetcode"));

console.log(makeGood("abBAcC"));

console.log(makeGood("s"));