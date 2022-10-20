// 74ms, 97.85%
// 46.3 MB

const countMatches = function(items, ruleKey, ruleValue) {
    const keys = ["type", "color", "name"];
    const index = keys.indexOf(ruleKey);

    return items.filter(item => item[index] === ruleValue).length;
};

console.log(countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], "color", "silver"));

console.log(countMatches([["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], "type", "phone"));