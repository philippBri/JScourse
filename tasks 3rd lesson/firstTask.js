var n = parseInt(prompt("Введите N - количество объектов в массиве"));

var array = new Array();
var names = ["Андрей", "Мария", "Григорий", "Максим", "Владислав", "Петр", "Александр", "Дария", "Анастасия", "Eкатерина", "Ольга"];
var cities = ["Минск", "Брест", "Витебск"];

for (var i = 0; i < n; i++) {
	array.push({
				name: names[parseInt(Math.random()*names.length)],
				age: parseInt((Math.random()*40)+20),
				city: cities[parseInt(Math.random()*cities.length)],
				print: function() {
					return this.name + " " + this.city + " " + this.age;
				}
			});
}

array.sort(function(a, b) { return a.age > b.age ? 1: -1; })

for (var i = array.length - 1; i >= 0; i--) {
	console.log(array[i].print());
}



