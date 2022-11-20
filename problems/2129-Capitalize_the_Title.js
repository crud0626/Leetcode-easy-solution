// 71ms, 86.85%
// 42.7 MB

const capitalizeTitle = function(title) {
    const arr = title.toLowerCase().split(" ");
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length > 2) {
            const word = arr[i].replace(/\w/, (first) => first.toUpperCase());
            arr[i] = word;
        }
    }

    return arr.join(" ");
};

console.log(capitalizeTitle("capiTalIze tHe titLe"));

console.log(capitalizeTitle("First leTTeR of EACH Word"));

console.log(capitalizeTitle("i lOve leetcode"));