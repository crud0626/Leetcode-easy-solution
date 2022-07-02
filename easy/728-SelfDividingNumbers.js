// 81ms, 79.57%
// 44.8 MB

const selfDividingNumbers = function(left, right) {
    const result = [];
    for(let i = left; i <= right; i++) {
        const divider = i.toString().split("");
        let condition = true;
        
        for(let j = 0; j < divider.length; j++) {
            if(i % divider[j] !== 0) {
                condition = false;
                break;
            }
        }

        if(condition) {
            result.push(i)
        };
    }
    return result;
};

console.log(selfDividingNumbers(1, 22));

console.log(selfDividingNumbers(47, 85));