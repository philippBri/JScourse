var n = parseInt(prompt("Enter a value"));

var table = document.createElement("table");

var k = 1;

for (var i = 1; i <= n; i++) {
  var tr = document.createElement("tr");
  for (var j = 1; j <= n; j++) {
    var td = document.createElement("td");
    td.innerText = i*j;
    if (i==j) {
      td.setAttribute("style", "background-color: red;");
    }
    
    tr.appendChild(td);
  };
  table.appendChild(tr);
};

document.body.appendChild(table);
