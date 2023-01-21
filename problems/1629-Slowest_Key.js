// 61ms, 93.69%
// 42.5 MB

const slowestKey = function(releaseTimes, keysPressed) {
    const len = keysPressed.length;
    let resultTime = releaseTimes[0], resultChar = keysPressed[0];

    for(let i = 1; i < len; i++) {
        const time = releaseTimes[i] - releaseTimes[i-1];
        const key = keysPressed[i];

        if (time > resultTime) {
            resultTime = time;
            resultChar = key;
        }

        if (time === resultTime && resultChar < key) resultChar = key;
    }

    return resultChar;
};

console.log(slowestKey([9,29,49,50], "cbcd"));

console.log(slowestKey([12,23,36,46,62], "spuda"));