// 66ms, 94.15%
// 42 MB

const constructRectangle = function(area) {
    const start = Math.floor(Math.sqrt(area));

    for(let i = start; i > 0; i--) {
        if(area % i === 0) {
            return [area / i, i];
        }
    }
};

console.log(constructRectangle(4));

console.log(constructRectangle(37));

console.log(constructRectangle(122122));