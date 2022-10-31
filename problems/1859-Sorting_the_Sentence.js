// 60ms, 94.84%
// 42.1 MB

const sortSentence = function(s) {
    const arr = s.split(" ");
    const result = new Array(arr.length);

    arr.forEach(i => {
        const index = i[i.length-1] - 1;
        const word = i.slice(0, i.length-1);
        result[index] = word;
    });

    return result.join(" ");
};

console.log(sortSentence("is2 sentence4 This1 a3"));

console.log(sortSentence("Myself2 Me1 I4 and3"));