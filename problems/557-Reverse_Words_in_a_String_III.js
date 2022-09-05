// 76ms, 92.07%
// 48.8 MB

const reverseWords = function(s) {
    const arr = s.split(" ");

    const result = arr.map(a => {
        const temp = a.split("");
        return temp.reverse().join("");
    })

    return result.join(" ");
};

console.log(reverseWords("Let's take LeetCode contest"));

console.log(reverseWords("God Ding"));