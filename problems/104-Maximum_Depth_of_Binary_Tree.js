// 85ms, 81.60%
// 44.3 MB

const maxDepth = function(root) {
    let answer = 0;
    
    function dfs(node, count) {
        if(!node) {
            answer = Math.max(answer, count);
            return;
        }
        
        count ++;
        
        dfs(node.left, count);
        dfs(node.right, count);
    }
    
    dfs(root, 0);
    
    return answer;
};
