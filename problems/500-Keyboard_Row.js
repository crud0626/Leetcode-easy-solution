// 57ms, 94.15%
// 42MB

const findWords = function(words) {
    const result = [];
    const first = "qwertyuiop";
    const second = "asdfghjkl";
    const third = "zxcvbnm";

    words.forEach(word => {
        let row = "";

        const targetWord = word.toLowerCase();

        switch(true) {
            case first.indexOf(targetWord[0]) !== -1 :
                row = first;
                break;
            case second.indexOf(targetWord[0]) !== -1 :
                row = second;
                break;
            case third.indexOf(targetWord[0]) !== -1:
                row = third;
                break;
            default:
                return;
        }

        for(let i = 1; i < targetWord.length; i++) {
            if (row.indexOf(targetWord[i]) === -1) {
                return;
            }
        }
        result.push(word);
    })

    return result;
};

console.log(findWords(["Hello","Alaska","Dad","Peace"]));

console.log(findWords(["omk"]));

console.log(findWords(["adsdf","sfd"]));

