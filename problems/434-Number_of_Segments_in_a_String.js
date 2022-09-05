// 65ms, 75.86%
// 42MB

const countSegments = function(s) {
    s = s.split(" ");
    const result = s.filter(word => word !== "");
    return result.length;
};

console.log(countSegments("Hello, my name is John"));

console.log(countSegments("Hello"));