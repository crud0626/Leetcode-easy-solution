// 60ms, 97.60%
// 44.9MB

const reverseStr = function(s, k) {
    s = s.split("");

    for(let i = 0; i < s.length; i += k * 2) {
        const prev = s.slice(i, i + k).reverse();
        s.splice(i, k, ...prev);
    }

    return s.join("");
};

console.log(reverseStr("abcdefg", 2));

console.log(reverseStr("abcd", 2));