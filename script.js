/******************************************
 *  Author : Author   
 *  Created On : Wed Jun 06 2018
 *  File : script.js
 *******************************************/

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