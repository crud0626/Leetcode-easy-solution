// 71ms, 98.59%
// 43.7 MB

const kthDistinct = function(arr, k) {
    const distinctSet = new Set();
    const checkSet = new Set();
    
    for(let i = 0; i < arr.length; i++) {
        const str = arr[i];
        
        if(checkSet.has(str)) {
            distinctSet.delete(str);
            continue;
        }
        
        distinctSet.add(str);
        checkSet.add(str);
    }
    
    return Array.from(distinctSet)[k-1] || "";
};

console.log(kthDistinct(["d","b","c","b","c","a"], 2));

console.log(kthDistinct(["aaa","aa","a"], 1));

console.log(kthDistinct(["a","b","a"], 3));