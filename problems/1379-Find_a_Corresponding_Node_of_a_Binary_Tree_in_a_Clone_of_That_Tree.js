// 319ms, 88.86%
// 64.8 MB

const getTargetCopy = function(original, cloned, target) {
    const originalQ = [], clonedQ = [];
    originalQ.push(original);
    clonedQ.push(cloned);
     
    while(originalQ.length !== 0) {
        const oNode = originalQ.shift(), cNode = clonedQ.shift();
        
        if(oNode === target) return cNode;
        
        if(oNode.left) {
            originalQ.push(oNode.left);
            clonedQ.push(cNode.left);
        }
        
        if(oNode.right) {
            originalQ.push(oNode.right);
            clonedQ.push(cNode.right);
        }
    }
    
    return null;
}