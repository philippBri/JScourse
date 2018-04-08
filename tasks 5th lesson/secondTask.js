var dot = ":";
var see = false;

var oclock = function() {
  // body...
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  if (see) {
    dot = " ";
    see = false;
  } else {
    dot = ":"
    see = true;
  }
  if (seconds.length == 1) {
    seconds = "0" + seconds;
  }
  document.getElementById("watch").innerHTML = hours + dot + minutes + dot + seconds;
};

setInterval(oclock, 1000);

document.getElementById("watch").setAttribute("style", 
  "font-weight: bold; color: white; background-color: blue; border: 10px solid red; width: 60px");

