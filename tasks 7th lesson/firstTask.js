var n = parseInt(prompt("Enter a value"));

var table = document.createElement("table");

var k = 1;

for (var i = 1; i <= n; i++) {
  var tr = document.createElement("tr");
  for (var j = 1; j <= n; j++) {
    var td = document.createElement("td");
    td.innerText = i*j;    
    tr.appendChild(td);
  };
  table.appendChild(tr);
};

document.body.appendChild(table);


document.getElementsByTagName("table")[0].addEventListener("mouseover",setRandomColor);
document.getElementsByTagName("table")[0].addEventListener("mouseout", setDefaultColor);


function setRandomColor(e){
    if(e.target.tagName==="TD") {
        e.target.style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16);
    }
};
    

function setDefaultColor(e){
    if(e.target.tagName==="TD") {
        e.target.style.backgroundColor = "white";
    }
};