// 84ms, 97.00%
// 51.7 MB

const maxProfit = function(prices) {
    let profit = 0, buyPrice = prices[0];

    for(let i = 1; i < prices.length; i++) {
        const current = prices[i], diff = current - buyPrice;
        
        if(buyPrice > current) buyPrice = current;

        if(profit < diff) profit = diff;
    }

    return profit;
};

console.log(maxProfit([7,1,5,3,6,4]));

console.log(maxProfit([7,6,4,3,1]));