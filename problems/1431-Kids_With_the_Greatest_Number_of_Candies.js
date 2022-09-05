// 68ms, 90.05%
// 40.3 MB

const kidsWithCandies = function(candies, extraCandies) {
    const maxNum = Math.max(...candies);
    return candies.map(candy => maxNum <= candy + extraCandies);
};

console.log(kidsWithCandies([2,3,5,1,3], 3));

console.log(kidsWithCandies([4,2,1,1,2], 1));

console.log(kidsWithCandies([12,1,12], 10));