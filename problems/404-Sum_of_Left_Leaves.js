// 70ms, 90.66%
// 43.6 MB

const sumOfLeftLeaves = function(root, isLeft = false) {
    if(!root) return 0;
    
    if(!root.left && !root.right) {
        return isLeft ? root.val : 0;
    }

    return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right, false);
};