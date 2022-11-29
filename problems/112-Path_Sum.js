// 65ms, 98.70%
// 45.6 MB

const dfs = function(node, sum, targetSum) {
    if(!node) return false;
    
    sum += node.val;
    
    if(!node.left && !node.right) {
        return sum === targetSum;
    }
    
    return dfs(node.left, sum, targetSum) || dfs(node.right, sum, targetSum);
}

const hasPathSum = function(root, targetSum) {
    return dfs(root, 0, targetSum);
};