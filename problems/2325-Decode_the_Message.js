// 68ms, 92.47%
// 45 MB

const decodeMessage = function(key, message) {
    let result = "";
    const lowerCases = "abcdefghijklmnopqrstuvwxyz";

    const set = new Set(key.replaceAll(" ", ""));
    key = Array.from(set).join("");

    const decoded = {};
    for(let i = 0; i < key.length; i++) {
        decoded[key[i]] = lowerCases[i];
    }

    for(let i = 0 ; i < message.length; i++) {
        const char = message[i];
        result += char === " " ? " " : decoded[char];
    }

    return result;
};

console.log(decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv"));

console.log(decodeMessage("eljuxhpwnyrdgtqkviszcfmabo", "zwx hnfx lqantp mnoeius ycgk vcnjrdb"));