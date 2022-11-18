// 61ms, 98.25%
// 44.3 MB

const mostWordsFound = function(sentences) {
    const words = sentences.map((item) => item.split(" ").length);
    return Math.max(...words);
};

console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));

console.log(mostWordsFound(["please wait", "continue to fight", "continue to win"]));