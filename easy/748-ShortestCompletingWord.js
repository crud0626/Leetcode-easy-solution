// 69ms, 100%
// 44.6MB

const shortestCompletingWord = function(licensePlate, words) {
    let result = null;

    const alphabets = licensePlate.toLowerCase().match(/[a-z]/g);

    for(let i = 0; i < words.length; i++) {
        let target = words[i];
        for(let j = 0; j < alphabets.length; j++) {
            if(target.includes(alphabets[j])) {
                target = target.replace(alphabets[j], "0");
            } else {
                target = null;
                break;
            }
        }

        if(target && (!result || target.length < result.length)) result = words[i];
    }
    
    return result;
};

console.log(shortestCompletingWord("1s3 PSt", ["step","steps","stripe","stepple"]));

console.log(shortestCompletingWord("1s3 456", ["looks","pest","stew","show"]));