// 67ms, 88.85%
// 42.4 MB

const heightChecker = function(heights) {
    const newArr = [...heights];
    newArr.sort((a, b) => a - b);
    let count = 0;
    for(let i = 0; i < heights.length; i++) {
      if(heights[i] !== newArr[i]) {
        count += 1;
      }
    }
    return count;
};

console.log(heightChecker([1,1,4,2,1,3]));

console.log(heightChecker([5,1,2,3,4]));

console.log(heightChecker([1,2,3,4,5]));