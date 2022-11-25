// 68ms, 94.74%
// 42.2 MB

const minTimeToType = function(word) {
    const wordsLen = 26, halfOfWordsLen = wordsLen / 2;
    let result = 0, position = 0;

    for(let i = 0; i < word.length; i++) {
        const index = word[i].charCodeAt() - 97;
        const diff = Math.abs(position - index);

        result += diff > halfOfWordsLen ? wordsLen - diff : diff;
        
        position = index;
        result += 1;
    }

    return result;
};

console.log(minTimeToType("abc"));

console.log(minTimeToType("bza"));

console.log(minTimeToType("zjpc"));