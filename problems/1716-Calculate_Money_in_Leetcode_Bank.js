// 72ms, 84.31%
// 42.1 MB

const totalMoney = function(n) {
    let result = 0, cost = 1, lastCost = 1;
  
    for(let i = 1; i <= n; i++) {
        result += cost++;
        if(i % 7 === 0) cost = ++lastCost;
    }
  
    return result;
};

console.log(totalMoney(4));

console.log(totalMoney(10));

console.log(totalMoney(20));