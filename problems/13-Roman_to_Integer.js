// 130ms, 85.26%
// 47.7mb

const romanToInt = function(s) {
    let result = 0;
    const roman = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    };

    for(let i = 0; i < s.length; i++) {
        if(roman[s[i]] >= roman[s[i+1]] || s[i+1] === undefined) {
            result += roman[s[i]];
        } else {
            result -= roman[s[i]];
        }
    }

    return result;
};

console.log(romanToInt("III"));

console.log(romanToInt("LVIII"));

console.log(romanToInt("MCMXCIV"));