// 55ms, 98.83%
// 42.2 MB

const truncateSentence = function(s, k) {
    return s.split(" ", k).join(" ");
};

console.log(truncateSentence("Hello how are you Contestant", 4));

console.log(truncateSentence("What is the solution to this problem", 4));

console.log(truncateSentence("chopper is not a tanuki", 5));