// 77ms, 89.92%
// 44 MB

const sumRootToLeaf = function(root) {
    let answer = 0;
    
    function dfs(node, binary) {
        binary += node.val.toString();

        if(!node.left && !node.right) {
            answer += parseInt(binary, 2);    
            return;
        }
        
        if(node.left) dfs(node.left, binary);
        if(node.right) dfs(node.right, binary);
    }
    
    dfs(root, "");
    
    return answer;
};