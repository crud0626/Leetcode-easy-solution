// 128ms
// 51.6 MB

const isPalindrome = function(x) {
    if (-1 < x) {
        x = x.toString();
        const rev = x.split("").reverse().join("");
        if (x === rev) {
            return true;
        }
    }
    return false;
};

console.log(isPalindrome(121));

console.log(isPalindrome(-121));

console.log(isPalindrome(10));