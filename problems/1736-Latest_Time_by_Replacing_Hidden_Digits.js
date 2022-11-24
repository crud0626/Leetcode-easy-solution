// 65ms, 89.13%
// 41.9 MB

const maximumTime = function(time) {
    const result = time.split("");

    if(result[0] === "?") {
        const target = +result[1];
        result[0] = target > 3 ? "1" : "2";
    }

    if(result[1] === "?") {
        const target = +result[0];
        result[1] = target === 2 ? "3" : "9";
    }

    if(result[3] === "?") result[3] = "5";
    if(result[4] === "?") result[4] = "9";
    
    return result.join("");
};

console.log(maximumTime("2?:?0"));

console.log(maximumTime("0?:3?"));

console.log(maximumTime("1?:22"));