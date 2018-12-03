/******************************************
 *  Author : Audun Øhra   
 *  Created On : Mon May 28 2018
 *  File : Layout.js
 *******************************************/

var layoutList = [1, 1, 2, 1, 1];

var videoList = 
[
    "https://www.youtube.com/embed/eFFAQx1B8tA?autoplay=1", "GETINSPIRED",
    "https://www.youtube.com/embed/KqU3duLiMhM?autoplay=1", "SUPERHERO",
    "https://www.youtube.com/embed/K4ZwhAqq_78?autoplay=1", "MESTERHUS",
    "video/tall-vid1.mp4", "MESTERHUS",
    "https://www.youtube.com/embed/F1tds5ep38A?autoplay=1", "BIRK SPORT",
    "https://www.youtube.com/embed/5syhYWrpBR0?autoplay=1", "RICHARD NYSTAD",
];

var imageList = 
[
    "pictures/sqr-pic1.jpg", "1/1/4/4",
    "pictures/sqr-pic2.jpg", "1/4/5/9",
    "pictures/sqr-pic3.jpg", "4/2/7/4",
    "pictures/sqr-pic4.jpg", "4/1/5/2",
    "pictures/sqr-pic5.jpg", "4/4/7/7",
    "pictures/sqr-pic6.jpg", "2/9/5/12"
];

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
    var y = 0;
    for(var i = imgIndex; i < (imgIndex+(imgAmount*2));i+=2) {
        var image = document.createElement("DIV");
        image.className += "image pointer";
        image.style.backgroundImage = "url(" + imageList[i] + ")";
        image.style.gridArea = imageList[i+1];
        if(videoList[i].charAt(0) == "v") {
            image.setAttribute("onclick", "javascript:innerVideoPlayer(" + i + ")");
        } else {
            image.setAttribute("onclick", "javascript:youtubeVideoPlayer(" + i + ")");
        }
        container.appendChild(image);
        y++;
    }
    prevResult = projectNumber;
}

function youtubeVideoPlayer(videoNumber) {
    window.location = '#overlay';
    var overlay = document.getElementById("overlay");
    overlay.className = "z-index-1"
    var blackbox = document.createElement("blackbox");
    blackbox.className += "black-bg-box";
    blackbox.setAttribute("onclick", "javascript:hide()");
    overlay.appendChild(blackbox);
    var video = document.createElement("iframe");
    video.id = "popupVideo";
    video.className += "video";
    video.setAttribute("src", videoList[videoNumber]);
    var screensize = document.getElementById("screensize");
    var videoWidth = getVideoWidthByContainer(screensize);
    var videoHeight = setVideoHeightByFormat(videoWidth, 1.78); // 16/9
    video.style.width = videoWidth + "px";
    video.style.height = videoHeight + "px";
    video.setAttribute("frameborder", "0");
    video.setAttribute("allowFullScreen", "");
    overlay.appendChild(video);
}

function resizeVideo() {
    var video = document.getElementById("popupVideo");
    var screensize = document.getElementById("screensize");
    var width = getVideoWidthByContainer(screensize);
    video.style.width = width + "px";
    var height = (width/1.78);
    video.style.height = height + "px";
}

function getVideoWidthByContainer(container) {
    var windowWidth = container.clientWidth;
    if(windowWidth < 768) {
        var videoWidth = (windowWidth);
    } else {
        var videoWidth = (windowWidth/1.6);
    }
    return videoWidth;
}

function getVideoHeightByContainer(container) {
    var windowHeight = container.clientHeight;
    if(windowHeight < 768) {
        var videoHeight = (windowHeight/1.1);
    } else {
        var videoHeight = (windowHeight/1.2);
    }
    return videoHeight;
}

function setVideoHeightByFormat(videoWidth, format) {
    var videoHeight = (videoWidth/format);
    return videoHeight;
}

function setVideoWidthByFormat(videoHeight, format) {
    var videoWidth = (videoHeight/format);
    return videoWidth;
}

function innerVideoPlayer(videoNumber) {
    window.location = '#overlay';
    var overlay = document.getElementById("overlay");
    overlay.className = "z-index-1"
    var blackbox = document.createElement("blackbox");
    blackbox.className += "black-bg-box";
    blackbox.setAttribute("onclick", "javascript:hide()");
    overlay.appendChild(blackbox);
    var video = document.createElement("VIDEO");
    var screensize = document.getElementById("screensize");
    if(videoList[videoNumber].charAt(6) == "t") {
        var height = getVideoHeightByContainer(screensize);
        var width = Math.floor(setVideoWidthByFormat(height, 1.78));
        video.width = width;
        console.log(height + "|" + width);
    } else {
        
    }
    video.id = "videoBIG";
    video.className += "video";
    video.autoplay = true;
    video.controls = true;
    var source = document.createElement("SOURCE");
    source.src = videoList[videoNumber];
    overlay.appendChild(video);
    video.appendChild(source);
    video.load();
 }

function getInitialIndex(number) {
    var index = 0;
    for(var i = 0; i < number; i++) {
        index += layoutList[i];
    }
    return index*2;
}

window.onresize = resizeVideo;