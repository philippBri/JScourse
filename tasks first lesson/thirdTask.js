
	var all = prompt("Введите выражение");

	var firstNumb = parseInt(all);
	var length = firstNumb.toString().length;
	var sign = all.substring(length, length + 1);
	var secondNumb = parseInt(all.substring(length+1,all.length));

	switch(sign) {
		case "+": 
			console.log(firstNumb + secondNumb);
			break;
		case "-": 
			console.log(firstNumb - secondNumb);
			break;
		case "*": 
			console.log(firstNumb * secondNumb);
			break;
		case "/": 
			console.log(firstNumb / secondNumb);
			break;
		case "%": 
			console.log(firstNumb % secondNumb);
	}


