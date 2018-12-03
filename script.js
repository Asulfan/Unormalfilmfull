/******************************************
 *  Author : Author   
 *  Created On : Wed Jun 06 2018
 *  File : script.js
 *******************************************/

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

window.addEventListener("hashchange", function() {
    if(location.hash === "") {
        hide();
    }
});

var state = 0;

function workMenu() {
     var menu = document.getElementById("work-list");
     if(state == 0) {
        menu.className = "white-box position-b"
        state = 1;
     } else {
        menu.className = "white-box position-a"
        state = 0;
     }
 }

function hide() {
    var overlay = document.getElementById("overlay");
    overlay.className = "z-index-b"
    overlay.innerHTML = " ";
 }