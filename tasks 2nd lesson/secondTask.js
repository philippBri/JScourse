var n = parseInt(prompt("Введите N"));

var array = [];

var koef = "";
var result = 0;
var randomValue = 0;

//создаем полином из n элементов с рандомными коэффициентами (5..20)
for (var i = 0; i < n; i++) {
	randomValue = Math.floor((Math.random() * (20-5) + 5));
	array.push(randomValue);
	koef = koef + array[i] + " ";	
}

console.log(koef);

var x = parseInt(prompt("Введите x"));

for (var i = 0; i < array.length; i++) {
	result = result + array[i]*Math.pow(x, i);
}

console.log('Полином = ' + result);
