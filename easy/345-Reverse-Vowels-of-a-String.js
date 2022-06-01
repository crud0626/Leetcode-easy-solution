// 92ms, 78.28%
// 49MB

const reverseVowels = function(s) {
    const regex = new RegExp(/[aeiou]/gi);
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    const matched = s.match(regex);
    const result = [];
    if(matched) {
        for(let i = 0; i < s.length; i++) {
            if(vowels.includes(s[i])) {
                result.push(matched.pop());
            } else {
                result.push(s[i]);
            }
        }
        return result.join("");
    } else {
        return s;
    }
};

console.log(reverseVowels("hello"));

console.log(reverseVowels("leetcode"));