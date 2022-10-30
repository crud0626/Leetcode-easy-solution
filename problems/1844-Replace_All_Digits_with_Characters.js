// 63ms, 96.15%
// 42.3 MB

const replaceDigits = function(s) {
    let result = "";
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    for(let i = 0; i < s.length; i+=2) {
        const c = s[i];
        if(s[i+1]) {
            const x = parseInt(s[i+1]);
            const nextIndex = alphabet.indexOf(c) + x;
            
            result += `${c}${alphabet[nextIndex]}`;
            continue;
        }

        result += c;
    }

    return result;
};

console.log(replaceDigits("a1c1e1"));

console.log(replaceDigits("a1b2c3d4e"));