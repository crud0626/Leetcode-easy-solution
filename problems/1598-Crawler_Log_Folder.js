// 73ms, 84.72%
// 43.7 MB

const minOperations = function(logs) {
    let minNums = 0;

    for(let i = 0; i < logs.length; i++) {
        const target = logs[i];

        switch(true) {
            case target.match(/\w+\//) !== null:
                minNums += 1;
                break;
            case target.match(/\.{2}\//) !== null && minNums > 0:
                minNums -= 1;
                break;
            default:
                break;
        }
    }

    return minNums;
};

console.log(minOperations(["d1/","d2/","../","d21/","./"]));

console.log(minOperations(["d1/","d2/","./","d3/","../","d31/"]));

console.log(minOperations(["d1/","../","../","../"]));