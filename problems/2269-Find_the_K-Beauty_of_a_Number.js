// 70ms, 82.47%
// 42.8 MB

const divisorSubstrings = function(num, k) {
    let result = 0;
    const numToStr = num.toString();

    for(let i = 0; i <= numToStr.length-k; i++) {
        const target = +numToStr.slice(i, i+k);
        if(num % target === 0) result ++;
    }

    return result;
};

console.log(divisorSubstrings(240, 2));

console.log(divisorSubstrings(430043, 2));