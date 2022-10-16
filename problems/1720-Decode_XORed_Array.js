// 100ms, 92.68%
// 49.4 MB

const decode = function(encoded, first) {
    const arr = new Array(encoded + 1);
    arr[0] = first;

    for (let i = 0; i < encoded.length; i++) {
        arr[i+1] = encoded[i] ^ arr[i];
    }

    return arr;
};

console.log(decode([1,2,3], 1));

console.log(decode([6,2,7,3], 4));