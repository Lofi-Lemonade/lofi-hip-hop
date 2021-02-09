console.clear();
console.clear();
console.clear();
console.clear();
console.clear();
var colors = require("colors");
console.log("%c Lofi Hip Hop Beats To Relax / Study To ✍🏫", " color: aqua");
console.log(
  "%c I hope this Website Helps You Relax / Study Better 🚀✍",
  " color: blue"
);
console.log("%c Have a good day 👋✍", " color: navy");
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
     elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX; pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX; 
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX; 
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}