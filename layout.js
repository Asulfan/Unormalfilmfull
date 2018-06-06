/******************************************
 *  Author : Audun Øhra   
 *  Created On : Mon May 28 2018
 *  File : Layout.js
 *******************************************/

var layoutList = [2, 3, 1];

var imageList = ["pictures/pic1.jpg", "1/1/4/4",
                 "pictures/pic2.jpg", "1/4/5/9",
                 "pictures/pic3.jpg", "4/2/7/4",
                 "pictures/pic4.jpg", "4/1/5/2",
                 "pictures/pic5.jpg", "4/4/7/7",
                 "pictures/pic6.jpg", "2/9/5/12"];

var prevResult = 15;

function getRandomLayout() {
    var random = Math.floor(Math.random()*layoutList.length);
    console.log(random);
    if(prevResult == random) {
        getRandomLayout();
    } else {
        setLayoutByIndex(random);
    }
}

function setLayoutByIndex(projectNumber) {
    var container = document.getElementById("image-container");
    container.innerHTML = " ";
    var index = projectNumber*2;
    var imgAmount = layoutList[projectNumber];
    var imgIndex = getInitialIndex(projectNumber);
    for(var i = imgIndex; i < (imgIndex+(imgAmount*2));i+=2) {
        var image = document.createElement("DIV");
        image.className += "image";
        image.style.backgroundImage = "url(" + imageList[i] + ")";
        image.style.gridArea = imageList[i+1];
        container.appendChild(image);
    }
    prevResult = projectNumber;
}

function getInitialIndex(number) {
    var index = 0;
    for(var i = 0; i < number; i++) {
        index += layoutList[i];
    }
    return index*2;
}