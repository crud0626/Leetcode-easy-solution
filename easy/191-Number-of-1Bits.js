// 70ms, 82.25%
// 42.7mb

const hammingWeight = function(n) {
    let result = 0;
    n = n.toString(2);
    
    for(let i = 0; i < n.length; i++) {
        if(n[i] == 1) {
            result += 1;
        }
    }
    
    return result;
};

console.log(hammingWeight("00000000000000000000000000001011"));

console.log(hammingWeight("00000000000000000000000010000000"));

console.log(hammingWeight("11111111111111111111111111111101"));