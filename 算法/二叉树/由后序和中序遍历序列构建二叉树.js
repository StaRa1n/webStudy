function TreeNode(val, left, right) {
    this.val = (val === undefined) ? 0 : val;
    this.left = (left === undefined) ? null : left;
    this.right = (right === undefined) ? null : right;
}

function buildTree(val_list) {
    // 数组为空
    if (!val_list || val_list.length === 0) {
        return;
    }
    // 根节点
    var root = new TreeNode(val_list.shift());

    var nodeQueue = [root];
    // 对root节点进行操作，更新node
    while (val_list.length > 0) {
        var node = nodeQueue.shift();
        // n = node.level + 1;	// 获取父节点的层级，子节点在该层级上+1
        // 构建：左孩子节点
        if (val_list.length === 0) {
            break;
        }
        var leftVal = val_list.shift();
        if (leftVal != null) {
            node.left = new TreeNode(leftVal);
            nodeQueue.push(node.left);
        }
        // 构建：右孩子节点
        if (val_list.length === 0) {
            break;
        }
        var rightVal = val_list.shift();
        if (rightVal != null) {
            node.right = new TreeNode(rightVal);
            nodeQueue.push(node.right);
        }
    }
    return root;
}

var buildTree = function (inorder, postorder) {
    if (postorder.length === 0) return null;

    const root = new TreeNode(postorder[postorder.length - 1])

    if (postorder.length === 1) return root;

    let index = 0;
    for (index; index < inorder.length; index++) {
        if (inorder[index] === root.val)
            break;
    }

    let inLeftArr = inorder.slice(0, index);
    let inRightArr = inorder.slice(index + 1, inorder.length);

    let postLeftArr = postorder.slice(0, index);
    let postRightArr = postorder.slice(index, postorder.length - 1);

    root.left = buildTree(inLeftArr, postLeftArr);
    root.right = buildTree(inRightArr, postRightArr);

    return root;
};

let inorder = [9, 3, 15, 20, 7];
let postorder = [9, 15, 7, 20, 3];

console.log(buildTree(inorder, postorder));
// console.log(inorder.slice(0, 1));