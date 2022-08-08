// 67ms, 86.10%
// 42.1 MB

const isPrefixOfWord = function(sentence, searchWord) {
    const arr = sentence.split(" ");
    const regex = new RegExp(`\\b${searchWord}\\w*`);
    const target = sentence.match(regex);

    return target ? arr.indexOf(target[0]) + 1 : -1;
};

console.log(isPrefixOfWord("i love eating burger", "burg"));

console.log(isPrefixOfWord("this problem is an easy problem", "pro"));

console.log(isPrefixOfWord("i am tired", "you"));