// 74ms, 77.71%
// 42.5 MB

const freqAlphabets = function(s) {
    const alphabet = " abcdefghijklmnopqrstuvwxyz";

    const result = s.replace(/(\d{2})\#/g, (matched, num) => alphabet[parseInt(num)]);
    return result.replace(/\d/g, matched => alphabet[matched]);
};

console.log(freqAlphabets("10#11#12"));

console.log(freqAlphabets("1326#"));