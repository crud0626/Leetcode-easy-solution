// 73ms, 86.75%
// 42.3 MB

const isValid = function(s) {
    s = s.split("");
    const stack = [];

    for(let i = 0; i < s.length; i++) {
        switch(s[i]) {
            case "(":
                stack.push(")");
                break;
            case "[":
                stack.push("]");
                break;
            case "{":
                stack.push("}");
                break;
            default:
                if(stack.pop() !== s[i]) return false;
                break;
        }
    }
    
    return stack.length === 0;
};

console.log(isValid("()"));

console.log(isValid("()[]{}"));

console.log(isValid("(]"));