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

var getMinimumDifference = function (root) {
    let arr = [];
    let min = Infinity;
    function BFS(root) {
        if (!root) return null;

        if (root.left) BFS(root.left);
        arr.push(root.val);
        if (root.right) BFS(root.right);
    }

    for (let i = 1; i < arr.length; i++) {
        if ((arr[i] - arr[i - 1]) < min) min = arr[i] - arr[i - 1];
    }
    return min;
};

const root = buildTree([236, 104, 701, null, 227, null, 911]);
console.log(getMinimumDifference(root));