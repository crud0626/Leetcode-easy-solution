// 62ms, 95.06%
// 42.3 MB

const largestAltitude = function(gain) {
    const arr = [0];
    let current = 0;

    for(let i = 0; i < gain.length; i++) {
        current += gain[i];
        arr.push(current);
    }
    
    return Math.max(...arr);
};

console.log(largestAltitude([-5,1,5,0,-7]));

console.log(largestAltitude([-4,-3,-2,-1,4,3,2]));