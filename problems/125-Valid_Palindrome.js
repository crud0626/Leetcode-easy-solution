// 64ms, 99.30%
// 46.2 MB

const isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    if(s.length === 1) {
        return true;
    }

    return s === s.split("").reverse().join("");
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));

console.log(isPalindrome("race a car"));

console.log(isPalindrome(" "));