// 61ms, 97.54%
// 42.8 MB

const checkTree = function(root) {
    return root.val === root.left.val + root.right.val;
};