// 75ms, 90.22%
// 43.7 MB

const flipAndInvertImage = function(image) {
    const result = [];

    for(let i = 0; i < image.length; i++) {
        const arr = image[i].reverse().map(a => a === 1 ? 0 : 1);
        result.push(arr);
    }

    return result;
};

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]));

console.log(flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]));