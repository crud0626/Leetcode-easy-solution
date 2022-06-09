// 67ms, 94.09%
// 44.1 MB

const longestPalindrome = function(s) {
    const set = new Set();
    let count = 0;
    
    for (const char of s) {
        if (set.has(char)) {
			count += 2;
            set.delete(char);
        } 
		else {
            set.add(char);
        }
    }

    return count + (set.size > 0 ? 1 : 0);
};

console.log(longestPalindrome("abccccdd"));

console.log(longestPalindrome("a"));

console.log(longestPalindrome("bb"));