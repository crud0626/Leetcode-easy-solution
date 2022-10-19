// 62ms, 95.20%
// 42 MB

const mergeAlternately = function(word1, word2) {
    let result = "";
    const arr1 = word1.split(""), arr2 = word2.split("");

    for(let i = 0; i < word1.length; i++) {
        const second = arr2.length !== 0 ? arr2.shift() : "";
        result += arr1.shift() + second;
    }

    return result + arr2.join("");
};

console.log(mergeAlternately("abc", "pqr"));

console.log(mergeAlternately("ab", "pqrs"));

console.log(mergeAlternately("abcd", "pq"));