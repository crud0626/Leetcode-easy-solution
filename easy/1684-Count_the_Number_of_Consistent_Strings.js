// 103ms, 96.37%
// 53.6 MB

const countConsistentStrings = function(allowed, words) {
    const result = [];
    const regex = new RegExp(`[^${allowed}]`, "g");

    for(let i = 0; i < words.length; i++) {
        if(!words[i].match(regex)) {
            result.push(words[i]);
        }
    }

    return result.length;
};

console.log(countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"]));

console.log(countConsistentStrings("abc", ["a","b","c","ab","ac","bc","abc"]));

console.log(countConsistentStrings("cad", ["cc","acd","b","ba","bac","bad","ac","d"]));