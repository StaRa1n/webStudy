var partition = function (s) {
    const path = [], res = [];

    function backstarcking(s, startIndex) {
        if (startIndex >= s.length) {
            res.push([...path]);
            return;
        }

        for (let i = startIndex; i < s.length; i++) {
            if (!isPalindrome(startIndex, i, s)) continue;
            path.push(s.slice(startIndex, i + 1));
            backstarcking(s, i + 1);
            path.pop();
        }
    }

    backstarcking(s, 0);
    return res;
};

function isPalindrome(start, end, arr) {
    for (let i = start, j = end; i < j; i++, j--) {
        if (arr[i] !== arr[j]) return false;
    }
    return true;
}

const s = 'abaa';
console.log(partition(s));