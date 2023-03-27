function TreeNode(val, left, right) {
    this.val = (val === undefined) ? 0 : val;
    this.left = (left === undefined) ? null : left;
    this.right = (right === undefined) ? null : right;
}

var constructMaximumBinaryTree = function (nums) {
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
    // root.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1, nums.length));

    return root;

};
let sums = [1, 2, 7, 4, 5];
console.log(constructMaximumBinaryTree(sums));