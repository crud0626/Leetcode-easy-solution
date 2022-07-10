// 52ms, 100%
// 41.9 MB

const binaryGap = function(n) {
    let result = 0;
    const binary = n.toString(2);
    const arrOfOnes = binary.match(/1/g);

    if(arrOfOnes.length > 1) {
        let count = 0;
        for(let i = 0; i < binary.length; i++) {
            count += 1;
            
            if(binary[i] === "1") {
                result = Math.max(result, count);
                count = 0;
            }
        }
    }

    return result;
};

console.log(binaryGap(22));

console.log(binaryGap(8));

console.log(binaryGap(5));