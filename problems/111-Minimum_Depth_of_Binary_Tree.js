// 249ms, 93.06%
// 82.5 MB

const minDepth = function(root) {
    if(!root) return 0;
    
    let count = 1;
    
    const queue = [root];
    
    while(queue.length) {
        const len = queue.length;
        
        for(let i = 0; i < len; i++) {
            const node = queue.shift();
            
            if(!node.left && !node.right) {
                return count;
            }
            
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        
        count ++;
    }
    
    return count;
};