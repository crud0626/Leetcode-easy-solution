// 61ms, 95.38%
// 42.4 MB

const findSecondMinimumValue = function(root) {
    const queue = [root];
    let minValue = Infinity;
    
    while(queue.length) {
        const len = queue.length;
        
        for(let i = 0; i < len; i++) {
            const node = queue.shift();
            
            if(node.val !== root.val) {
                minValue = Math.min(minValue, node.val);
            }
            
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    
    return minValue === Infinity ? -1 : minValue;
};