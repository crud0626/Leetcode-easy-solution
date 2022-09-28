// 71ms, 93.83%
// 43.5 MB

const mostCommonWord = function(paragraph, banned) {
    const arr = paragraph.toLowerCase().split(/\W+/g);
    const map = new Map();
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === "") continue;

        const prevValue = map.get(arr[i]);
        map.set(arr[i], prevValue ? prevValue + 1 : 1);
    }

    const sortedArr = Array.from(map).sort((a, b) => b[1] - a[1]);

    for(let [str, count] of sortedArr) {
        if(!banned.includes(str)) {
            return str;
        }
    }
};

console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]));

console.log(mostCommonWord("a.", []));