// 47ms, 99.95%
// 42.1 MB

const checkIfPangram = function(sentence) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    for(let i = 0; i < alphabet.length; i++) {
        if(!sentence.includes(alphabet[i])) {
            return false;
        }
    }
    return true;
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));

console.log(checkIfPangram("leetcode"));