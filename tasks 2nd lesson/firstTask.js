var n = parseInt(prompt("Введите N"));
var s = parseInt(prompt("Введите s"));
var p = parseInt(prompt("Введите p"));

var array = [];

var revValue = 0;
var randomValue = 0;

for (var i = 0; i < n; i++) {
	randomValue = Math.floor((Math.random() * ((s+(p/100*s))-(s-(p/100*s)))) + (s-(p/100*s)));
	array.push(randomValue);
	revValue = revValue + 1/randomValue;
}

array.sort();

console.log(array);
console.log('Среднее гармоническое = ' + array.length/revValue);
