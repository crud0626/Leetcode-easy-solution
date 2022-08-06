// 65ms, 96.46%
// 44.1 MB

const stringMatching = function(words) {
    const subStrings = [];

    for(let i = 0; i < words.length; i++) {
        const target = words[i];
        const arr = [...words];
        arr.splice(i, 1);

        for(let j = 0; j < arr.length; j++) {
            if (arr[j].includes(target)) {
                subStrings.push(target);
                break;
            }
        }
    }

    return subStrings;
};

console.log(stringMatching(["mass","as","hero","superhero"]));

console.log(stringMatching(["leetcode","et","code"]));

console.log(stringMatching(["blue","green","bu"]));