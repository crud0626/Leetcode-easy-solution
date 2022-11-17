// 106ms, 86.45%
// 50.5 MB

const firstPalindrome = function(words) {
    for(let i = 0; i < words.length; i++) {
        if(words[i].split("").reverse().join("") === words[i]) {
            return words[i];
        }
    }
    
    return "";
};

console.log(firstPalindrome(["abc","car","ada","racecar","cool"]));

console.log(firstPalindrome(["notapalindrome","racecar"]));

console.log(firstPalindrome(["def","ghi"]));