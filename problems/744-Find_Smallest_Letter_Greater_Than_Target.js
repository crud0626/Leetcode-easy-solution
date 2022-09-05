// 77ms, 76.23%
// 44.3 MB

const nextGreatestLetter = function(letters, target) {
    for(let i = 0; i < letters.length; i++) {
        if(letters[i] > target) {
            return letters[i];
        }
    }
    return letters[0];
};

console.log(nextGreatestLetter(["c","f","j"], "a"));

console.log(nextGreatestLetter(["c","f","j"], "c"));

console.log(nextGreatestLetter(["c","f","j"], "d"));