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
    let num;
    let curSum = 0;
    let maxSum = 0;
    function BFS(root) {
        if (!root) return new TreeNode();

        let cur = root;

        let leftNode = BFS(root.left);
        let rightNode = BFS(root.right);

        if (leftNode && cur.val === leftNode.val) {
            curSum++;
        }
        if (rightNode && cur.val === rightNode.val) {
            curSum++;
        }


        if (cur.val !== leftNode.val || cur.val !== rightNode.val) {
            if (curSum > maxSum) {
                num = rightNode.val;
                maxSum = curSum;
            }
            // else if (curSum = maxSum) {
            //     num.push(cur.val);
            // }
            cur.sum = 0;
        }
        return root;
    }
    BFS(root);
    return num;
};

const root = buildTree([1, null, 3, 2, 4, null, null, 4, 4])
// console.log(root);
console.log(findMode(root));