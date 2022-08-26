// 66ms, 91.40%
// 41.6 MB

const maxRepeating = function(sequence, word) {
    let result = 0;

    let targetWord = word;
    while(sequence.includes(targetWord)) {
        result += 1;
        targetWord += word;
    }
    return result;
};

console.log(maxRepeating("ababc", "ab"));

console.log(maxRepeating("ababc", "ba"));

console.log(maxRepeating("ababc", "ac"));