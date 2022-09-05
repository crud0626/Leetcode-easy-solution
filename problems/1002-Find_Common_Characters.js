// 79ms, 91.71%
// 46.1 MB

const commonChars = function(words) {
    let result = words[0].split("");

    for (let i = 1; i < words.length; i++) {
        result = result.filter(a => {
            const prevLen = words[i].length;
            words[i] = words[i].replace(a, "");
            return prevLen > words[i].length;
        });
    }
    return result;
};


console.log(commonChars(["bella","label","roller"]));

console.log(commonChars(["cool","lock","cook"]));