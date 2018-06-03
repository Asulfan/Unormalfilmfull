/******************************************
 *  Author : Audun Øhra   
 *  Created On : Mon May 28 2018
 *  File : script.js
 *******************************************/
var imageList = ["pictures/pic1.jpg",
                 "pictures/pic2.jpg",
                 "pictures/pic3.jpg",
                 "pictures/pic4.jpg",
                 "pictures/pic5.jpg",
                 "pictures/pic6.jpg"];
var layoutList = [2, 3, 1];

function getRandLayout() {
    var rand = Math.floor(Math.random()*layoutList.length);
    console.log(rand);
    setLayoutByIndex(rand);
}

function setLayoutByIndex(index) {
    var container = document.getElementById("imagecontainer");
    container.innerHTML = " ";
    var imgAmount = layoutList[index];
    var imgIndex = getInitialIndex(index);
    for(var i = imgIndex; i < (imgIndex+imgAmount); i++) {
        var image = document.createElement("IMG");
        image.className += "img" + (i-imgIndex);
        image.src = imageList[i];
        container.appendChild(image);
    }
}

function getInitialIndex(number) {
    var index = 0;
    for(var i = 0; i < number; i++) {
        index += layoutList[i];
    }
    return index;
}