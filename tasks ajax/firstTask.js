document.getElementById("button").addEventListener("click", function () {
	var xhr = new XMLHttpRequest;
    xhr.open("GET", "number.txt", true);
    var div = document.getElementById("div");

    div.innerHTML = "Загрузка...";
	xhr.onreadystatechange = function() {
        var n = parseInt(this.responseText);
        var table = document.createElement("table");
        for (i = 1; i <= n; i++) {
            var tr = document.createElement("tr");
            for(j = 1; j <= n; j++) {
                var td = document.createElement("td");
                td.innerText = i*j;    
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        div.innerHTML = `<H1> Таблица умножения ${n} на ${n}. </H1>`;
        div.appendChild(table);
    };

	xhr.send(null);
});



