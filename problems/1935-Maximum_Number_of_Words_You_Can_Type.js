// 60ms, 94.3%
// 43.9 MB

const canBeTypedWords = function(text, brokenLetters) {
    let result = 0;
    const words = text.split(" ");
    
    if(!brokenLetters) return words.length;
    brokenLetters = brokenLetters.split("").join("|");
    const regex = new RegExp([brokenLetters]);

    for(let i = 0; i < words.length; i++) {
        const word = words[i];
        if(!word.match(regex)) result ++;
    }

    return result;
};

console.log(canBeTypedWords("hello world", "ad"));

console.log(canBeTypedWords("leet code", "lt"));

console.log(canBeTypedWords("leet code", "e"));