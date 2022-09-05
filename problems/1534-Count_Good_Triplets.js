// 71ms, 96.92%
// 41.5 MB

const countGoodTriplets = function(arr, a, b, c) {
    let count = 0;
    for(let i = 0; i < arr.length-2; i++) {
        for(let j = i+1; j < arr.length-1; j++) {
            for(let k = j+1; k < arr.length; k++) {
                const first = arr[i], second = arr[j], third = arr[k];

                if(Math.abs(first-second) <= a && Math.abs(second-third) <= b && Math.abs(first-third) <= c) {
                    count += 1;
                }
            }
        }
    }
    return count;
};

console.log(countGoodTriplets([3,0,1,1,9,7], 7, 2, 3));

console.log(countGoodTriplets([1,1,2,2,3], 0, 0, 1));