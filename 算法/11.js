class Text {
    constructor() {
        this.arr = [1, 2];
        this.str = 'asd';
    }

    sprint() {
        console.log(this.arr);
        console.log(this.str);
    }
}

const text = new Text();
text.sprint();