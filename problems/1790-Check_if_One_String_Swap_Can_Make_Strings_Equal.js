// 56ms, 95.97%
// 42.3 MB

const areAlmostEqual = function(s1, s2) {
    if(s1 === s2) return true;

    const arr1 = s1.split(""), arr2 = s2.split("");
    const diffIndex = [];

    arr1.forEach((str, i) => {
        if(str !== arr2[i]) diffIndex.push(i);
    });

    if(diffIndex.length === 2) {
        [arr2[diffIndex[0]], arr2[diffIndex[1]]] = [arr2[diffIndex[1]], arr2[diffIndex[0]]];
        return s1 === arr2.join("");
    }

    return false;
};

console.log(areAlmostEqual("bank", "kanb")); // true

console.log(areAlmostEqual("attack", "defend")); // false

console.log(areAlmostEqual("kelb", "kelb")); // true