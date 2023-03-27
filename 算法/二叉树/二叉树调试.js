// 新建树节点类
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

var hasPathSum = function (root, targetSum) {
    let res = false;

    function findCurSum(root, curSum) {
        if (!root) return;
        if (!root.left && !root.right) {
            curSum += root.val;
            if (curSum === targetSum) {
                res = ture;
            }
        }
        if (root.left) findCurSum(root.left, curSum + root.val)
        if (root.right) findCurSum(root.right + root.val + root.val);
    }

    findCurSum(root, 0);
    return res;
};

let arr = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1];
let tree = buildTree(arr)
console.log(hasPathSum(tree, 22));