// 61ms, 96.79%
// 41.7 MB

const toGoatLatin = function(sentence) {
    const vowelRegex = new RegExp(/[aeiou]/i);
    const arr = sentence.split(" ");
    let count = 1;

    for(let i = 0; i < arr.length; i++) {
        const word = arr[i];
        let newWord = word;

        if(vowelRegex.test(word[0])) {
            newWord += "ma";
        } else {
            const firstChar = newWord[0];
            newWord = `${newWord.slice(1)}${firstChar}ma`;
        }

        newWord += "a".repeat(count);
        count++;
        arr[i] = newWord;
    }

    return arr.join(" ");
};

console.log(toGoatLatin("I speak Goat Latin"));

console.log(toGoatLatin("The quick brown fox jumped over the lazy dog"));