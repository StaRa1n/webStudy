function TreeNode(val, left, right) {
    this.val = (val === undefined) ? 0 : val;
    this.left = (left === undefined) ? null : left;
    this.right = (right === undefined) ? null : right;
}

function leverLoadTree(root) {
    const res = [];
    const arr = [];
    res.push(root)
    while (res.length) {
        let cur = res.shift();
        arr.push(cur.val);

        if (cur.left) res.push(cur.left);
        if (cur.right) res.push(cur.right);
    }
    return arr;

}

var constructMaximumBinaryTree = function (nums) {
    if (nums.length === 0) {
        return null;
    }

    if (nums.length === 0) return 'null';
    let root = new TreeNode();
    if (nums.length === 1) {
        root.val = nums[0];
        return root;
    }


    let maxVlaue = 0;
    let maxIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > maxVlaue) {
            maxVlaue = nums[i];
            maxIndex = i;
            root.val = maxVlaue;
        }
    }

    root.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
    root.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1, nums.length));

    return root;

};
let sums = [3, 2, 1, 6, 0, 5];
console.log(constructMaximumBinaryTree(sums));
const root = constructMaximumBinaryTree(sums);
console.log(root);
console.log(leverLoadTree(root));
