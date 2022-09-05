// 64ms, 97.38%
// 43.8 MB

const canPlaceFlowers = function(flowerbed, n) {
    for(let i = 0; i < flowerbed.length; i++) {
        if(n === 0) {
            return true;
        }
        
        if(flowerbed[i] === 0 
            && (flowerbed[i-1] === 0 || flowerbed[i-1] === undefined) 
            && (flowerbed[i+1] === 0 || flowerbed[i+1] === undefined)
        ) {
            flowerbed[i] = 1;
            n -= 1;
        }
    }
    return n === 0 ? true : false;
};

console.log(canPlaceFlowers([1,0,0,0,1], 1));

console.log(canPlaceFlowers([1,0,0,0,1], 2));