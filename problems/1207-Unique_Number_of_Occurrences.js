// 51ms, 99.75%
// 42.9 MB

const uniqueOccurrences = function(arr) {
    const occurrences = {};

    for(let i = 0; i < arr.length; i++) {
        const n = arr[i]
        occurrences[n] = occurrences[n] ? occurrences[n] + 1 : 1;
    }

    const values = Object.values(occurrences);
    const set = new Set(values);

    return values.length === set.size;
};

console.log(uniqueOccurrences([1,2,2,1,1,3]));

console.log(uniqueOccurrences([1,2]));

console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]));