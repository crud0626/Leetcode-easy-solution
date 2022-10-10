// 68ms, 96.61%
// 42.4 MB

const findLucky = function(arr) {
    let result = -1;
    const freq = {};
    
    for(let i = 0; i < arr.length; i++) {
        const num = arr[i];
        freq[num] = freq[num] ? freq[num] + 1 : 1;
    }

    const keys = Object.keys(freq);

    for(let i = 0; i < keys.length; i++) {
        const key = keys[i], value = freq[key];
        if(key == value) result = value;
    }

    return result;
};

console.log(findLucky([2,2,3,4]));

console.log(findLucky([1,2,2,3,3,3]));

console.log(findLucky([2,2,2,3,3]));