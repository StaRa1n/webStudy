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

var findMode = function (root) {
    let count = 0, maxValue = 0, res = [];
    let cur, pre = root;

    function BFS(root) {
        if (!root) return;
        let cur = root;
        BFS(root.left);

        if (!pre) count = 1;
        if (pre.val === cur.val) {
            count++;
        } else {
            count = 1;
        }
        pre = cur;

        if (count === maxValue) {
            res.push(cur.val);
        }
        if (count > maxValue) {
            res = [];
            res.push(cur.val);
            maxValue = count;
        }

        BFS(root.right)
    }
    BFS(root);
    return res;
};

let root = buildTree([1, null, 2, 2]);
console.log(findMode(root));