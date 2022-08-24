// 63ms, 95.41%
// 42.7 MB

const maxLengthBetweenEqualCharacters = function(s) {
    const obj = {};
    const result = [];

    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        if(obj[char] === undefined) {
            obj[char] = i;
            continue;
        }

        const prev = obj[char];
        const next = i;
        result.push(s.slice(prev+1,next).length);
    }

    return result.length === 0 ? -1 : Math.max(...result);
};

console.log(maxLengthBetweenEqualCharacters("aa"));

console.log(maxLengthBetweenEqualCharacters("abca"));

console.log(maxLengthBetweenEqualCharacters("cbzxy"));