// 77ms, 87.79%
// 43.7 MB

const finalPrices = function(prices) {
    const result = [];
    for(let i = 0; i < prices.length; i++) {
        let price = prices[i];
        
        for(let j = i+1; j < prices.length; j++) {
            if (price >= prices[j]) {
                price -= prices[j];
                break;
            }
        }
        
        result.push(price);
    }

    return result;
};

console.log(finalPrices([8,4,6,2,3]));

console.log(finalPrices([1,2,3,4,5]));

console.log(finalPrices([10,1,1,6]));