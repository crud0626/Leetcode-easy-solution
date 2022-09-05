// 59ms, 96.94%
// 41.6 MB

const thousandSeparator = function(n) {
    const result = n.toString().split("");
  
    for(let i = result.length-3; i > 0; i-=3){
        result.splice(i,0,".");
    }
    
    return result.join("");
};

console.log(thousandSeparator(987));

console.log(thousandSeparator(1234));