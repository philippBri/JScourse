var str = prompt("Введите N");
var pattern = /^\+?\d{3}\(?\d{2}\)?\d{3}(\-?\d{2}){2}$/;
alert(pattern.test(str));
