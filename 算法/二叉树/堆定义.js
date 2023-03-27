class Heap {
    constructor(compare) {
        this.arr = [];
        this.compare = compare
    }

    fatherIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    leftChildIndex(i) {
        return i * 2 + 1;
    }

    rightChildIndex(i) {
        return i * 2 + 2;
    }

    //上浮指定坐标元素
    shiftUp(i) {
        let currentIndex = i;
        let fIndex = this.fatherIndex(currentIndex);
        while (currentIndex > 0 && this.arr[currentIndex] < this.arr[fIndex]) {
            [this.arr[currentIndex], this.arr[fIndex]] = [this.arr[fIndex], this.arr[currentIndex]];
            //更新下标
            currentIndex = fIndex;
            this.shiftUp(currentIndex);
        }
    }

    //下沉指定坐标元素
    shiftDown(i) {
        let right = this.rightChildIndex(i);
        let left = this.leftChildIndex(i);
        let length = this.arr.length;
        let currentIndex = i;

        //与左节点比较
        while (currentIndex < length && this.arr[currentIndex] > this.arr[left]) {
            [this.arr[currentIndex], this.arr[left]] = [this.arr[left], this.arr[currentIndex]]
            currentIndex = left;
            this.shiftDown(currentIndex);
        }
        //与右节点比较
        while (currentIndex < length && this.arr[currentIndex] > this.arr[right]) {
            [this.arr[currentIndex], this.arr[right]] = [this.arr[right], this.arr[currentIndex]]
            currentIndex = right;
            this.shiftDown(currentIndex);
        }
    }

    push(num) {
        this.arr.push(num);
        this.shiftUp(this.arr.length - 1);
    }


    pop() {
        let min = this.arr[0];
        //将队尾元素移至顶部
        this.arr[0] = this.arr[this.arr.length - 1];
        //移除队尾元素
        this.arr.pop();
        //下沉堆顶
        this.shiftDown(0);
        return min;
    }
}

// const arr = [5, 2, 3, 4, 6];
const heap = new Heap();
heap.push(1);
heap.push(5);
heap.push(2);
heap.pop();
heap.push(3);
heap.push(1);
heap.push(5);
heap.pop();
heap.push(1);
console.log(heap.arr);