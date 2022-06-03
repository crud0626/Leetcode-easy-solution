// 53ms, 98.94%
// 42.1MB

const hammingDistance = function(x, y) {
    let result = 0;
    const z = (x ^ y).toString(2);
    for(let i = 0; i < z.length; i++) {
        if(z[i] === "1") {
            result += 1;
        }
    }
    return result;
};

console.log(hammingDistance(1, 4));

console.log(hammingDistance(3, 1));