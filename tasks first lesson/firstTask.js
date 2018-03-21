
  var all = prompt("Введите строку");
  var countOpen = 0;
  var countClose = 0;
  var message;

for (var i = 0; i <= all.length-1; i++) {
	if (all[i] == "(") {
		countOpen++;
	} else if (all[i] == ")") {
		countClose++;
	}
	if (countOpen < countClose) {
		message = "Скобки расставлены не правильно!";
		break;
	}	
}

if (countOpen == countClose) {
	message = "Скобки расставлены правильно!";
} else {
	message = "Скобки расставлены не правильно!";
}

console.log(message);



