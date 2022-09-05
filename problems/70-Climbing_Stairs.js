// 52ms, 98.34%
// 41.8 MB

const climbStairs = function(n) {
    const arr = [1, 2, 3, 5];

    for(let i = 4; i <= n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }

    return arr[n-1];
};

console.log(climbStairs(2));

console.log(climbStairs(3));