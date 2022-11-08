// 59ms, 97.39%
// 42.3 MB

const reversePrefix = function(word, ch) {
    const index = word.indexOf(ch);
    
    if(index !== -1) {
        word = word.split("");
        const reverseWord = word.splice(0, index + 1).reverse();
        word.unshift(...reverseWord);
        return word.join("");
    }
    
    return word;
};

console.log(reversePrefix("abcdefd", "d"));

console.log(reversePrefix("xyxzxe", "z"));

console.log(reversePrefix("abcd", "z"));