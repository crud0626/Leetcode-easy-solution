// 67ms, 95.5%
// 42.2 MB

const maxNumberOfBalloons = function(text) {
    const obj = {
        b: 0,
        a: 0,
        l: 0,
        o: 0,
        n: 0
    };

    for(let i = 0; i < text.length; i++) {
        if (obj[text[i]] > -1) {
            obj[text[i]] += 1;
        }
    }

    obj["l"] = Math.floor(obj["l"] / 2);
    obj["o"] = Math.floor(obj["o"] / 2);

    return Math.min(...Object.values(obj));
};

console.log(maxNumberOfBalloons("nlaebolko"));

console.log(maxNumberOfBalloons("loonbalxballpoon"));

console.log(maxNumberOfBalloons("leetcode"));