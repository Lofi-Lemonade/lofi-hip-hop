console.clear();
console.clear()
console.clear()
console.clear()
console.clear()
console.log("%c Lofi Hip Hop Beats To Relax / Study To ✍🏫", " color: aqua");
console.log("%c I hope this Website Helps You Relax / Study Better 🚀✍", " color: blue");
console.log("%c Have a good day 👋✍", " color: navy");
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
$(document).ready(function () {

  function second_passed() {
    $('.clock').removeClass('is-off');
  }
  setTimeout(second_passed, 2000)

  $('.switcher').on('click', function(e) {
    e.preventDefault();
    $('.screen').toggleClass('glitch');
  });


  var newDate = new Date();
  newDate.setDate(newDate.getDate());

  setInterval( function() {

    var hours    = new Date().getHours();
    var seconds  = new Date().getSeconds();
    var minutes  = new Date().getMinutes();

    var realTime = ( hours < 10 ? '0' : '' ) + hours + ' : ' + ( minutes < 10 ? '0' : '' ) + minutes + ' : ' + ( seconds < 10 ? '0' : '' ) + seconds

    $('.time').html(realTime);
    $('.time').attr('data-time', realTime);

  }, 1000);

});