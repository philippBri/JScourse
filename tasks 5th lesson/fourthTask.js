var countries = [
{name: "The People's Republic of China", flag: "images/china.png", code: 86, population: 1363350000},
{name: "India", flag: "images/india.png", code: 91, population: 1241610000},
{name: "The United States", flag: "images/usa.png", code: 1, population: 317706000},
{name: "Indonesia", flag: "images/indonesia.png", code: 62, population: 249866000},
{name: "Brazil", flag: "images/brazil.png", code: 55, population: 201032714},
{name: "Pakistan", flag: "images/pakistan.png", code: 92, population: 185914000},
{name: "Nigeria", flag: "images/nigeria.png", code: 234, population: 173615000},
{name: "Bangladesh", flag: "images/bangladesh.png", code: 880, population: 152518015},
{name: "Russia", flag: "images/russia.png", code: 7, population: 14370000},
{name: "Japan", flag: "images/japan.png", code: 81, population: 12718000}
];

var ol = document.createElement('ol');
var h1 = document.createElement('h1')
var body = document.getElementsByTagName("body")[0];
h1.textContent = "Таблица с информацией о странах:";

body.appendChild(h1);
body.appendChild(ol);
 
countries.forEach(function(item){
			var li = document.createElement('li');
			ol.appendChild(li);
            var img=document.createElement('img');
            img.src=item.flag;
            li.innerHTML += "Country name: "+item.name+" code: "+item.code+" Population: "+item.population+" flag: ";
            li.appendChild(img);
		});