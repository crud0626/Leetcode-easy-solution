// 75ms, 79.81%
// 42.9 MB

const uniqueMorseRepresentations = function(words) {
    const result = new Set();
    const morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

    words.forEach(word => {
        let morse = "";

        for (let i = 0; i < word.length; i++) {
            const index = word.charCodeAt(i) - 97;
            morse += morseCode[index];
        }

        result.add(morse);
    });

    return result.size;
};

console.log(uniqueMorseRepresentations(["gin","zen","gig","msg"]));

console.log(uniqueMorseRepresentations(["a"]));
