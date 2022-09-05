// 63ms, 94.82%
// 42.4 MB

const relativeSortArray = function(arr1, arr2) {
    const result = [];
    for(let i = 0; i < arr2.length; i++) {
        while(arr1.includes(arr2[i])) {
            const targetIndex = arr1.indexOf(arr2[i]);
            if(targetIndex !== -1) {
                result.push(...arr1.splice(targetIndex, 1));
            }
        }
    }

    return result.concat(arr1.sort((a, b) => a - b));
};

console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]));

console.log(relativeSortArray([28,6,22,8,44,17], [22,28,8,6]));