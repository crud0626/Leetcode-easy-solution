// 68ms, 87.83%
// 44.8 MB

const maximumPopulation = function(logs) {
    const history = {};    

    for(let i = 0; i < logs.length; i++) {
        const [birth, death] = logs[i];

        for(let i = birth; i < death; i++) {
            history[i] = history[i] ? history[i] + 1 : 1;
        }
    }

    let result, maxNum = 0;

    for(let [key, value] of Object.entries(history)) {
        if(value > maxNum) {
            maxNum = value;
            result = key;
        }
    }

    return result;
};

console.log(maximumPopulation([[1993,1999],[2000,2010]]));

console.log(maximumPopulation([[1950,1961],[1960,1971],[1970,1981]]));