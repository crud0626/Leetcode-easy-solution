// 69ms, 99.42%
// 47.2 MB

const averageOfLevels = function(root) {
    const result = [];
    const arr = [root];
    
    while(arr.length !== 0) {
        const lenOfLevel = arr.length;
        let sum = 0, count = 0;
        
        for(let i = 0; i < lenOfLevel; i++) {
            const target = arr.shift();
            count++;
            sum += target.val;
            
            if(target.left) arr.push(target.left);
            if(target.right) arr.push(target.right);
        }
        
        result.push(sum / count);   
    }
    
    return result;
};