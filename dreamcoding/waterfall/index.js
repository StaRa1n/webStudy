window.onload = function () {
    imgLocation();
}

function imgLocation() {
    let imgArr = document.getElementsByClassName('box');
    let winWidth = document.documentElement.clientWidth;
    let imgWidth = imgArr[0].offsetWidth;

    let num = Math.floor(winWidth / imgWidth);
    let boxHeightArr = [];

    for (let i = 0; i < imgArr.length; i++) {

        if (i < num) {
            boxHeightArr.push(imgArr[i].offsetHeight)
        } else {
            let minHeight = Math.min(...boxHeightArr);
            let minIndex = boxHeightArr.indexOf(minHeight);

            imgArr[i].style.position = 'absolute';
            imgArr[i].style.top = boxHeightArr[minIndex] + 'px';
            imgArr[i].style.left = (imgWidth * minIndex) + 'px';

            boxHeightArr[minIndex] = boxHeightArr[minIndex] + imgArr[i].offsetHeight;
        }
        console.log(boxHeightArr)
    }

}

