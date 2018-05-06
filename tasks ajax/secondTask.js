
document.getElementById("button").addEventListener("click", function () {
    var xhr = new XMLHttpRequest;
    var url = document.getElementById("inputField").value;
    xhr.open("GET", url, true);
    var div = document.getElementById("div");

    var progress = document.getElementById("floatingCirclesG");
    progress.removeAttribute("hidden");

    xhr.onreadystatechange = function() {
        div.innerHTML = this.responseText;        
    };
    progress.setAttribute("hidden", true);     

	xhr.send(null);
});
