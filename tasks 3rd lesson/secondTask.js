var bookkeeping = new Array();

bookkeeping.push(new Array());

function addNewWorker(nameW, ageW, departmentW, salaryW, experienceW) {
		bookkeeping[0].push({
				name: nameW,
				age: ageW,
				department: departmentW,
				salary: salaryW,
				experience: experienceW,
				print: function() {
					return "Имя: " + this.name 
					+ ", возраст: " + this.age 
					+ ", отдел:" + this.department 
					+ ", зарплата: " + this.salary 
					+ ", стаж работы:" + this.experience;
				}
			});
};

function deleteWorkerByName(nameW) {
	var index = 0;
	for (var i = 0; i < bookkeeping[0].length; i++) {
		if(bookkeeping[0][i].name == nameW) {
			index = i;
			break;
		}
	}	
	if (index != -1) {
		bookkeeping[0].splice(index, 1);
	} else {
		alert("Такого работника не существует!");
	}
}

// to add = true, to delete = false;
var a = function(addDelete, nameW, ageW, departmentW, salaryW, experienceW) {
	// body...
	if (addDelete) {
		addNewWorker(nameW, ageW, departmentW, salaryW, experienceW);
	} else {
		deleteWorkerByName(nameW);
	}
};

bookkeeping.push(a);

var b = function() {
	var sumSalary = 0;
	bookkeeping[0].sort(function(a, b) { return a.salary > b.salary ? 1: -1; });
	bookkeeping[0].forEach(function(element) {
		console.log(element.print());
		sumSalary = sumSalary + element.salary;
	});
	console.log("Сумарная зарплата = " + sumSalary);
}

bookkeeping.push(b);

var c = function() {
	var sumSalary = 0;
	bookkeeping[0].sort(function(a, b) { return a.salary > b.salary ? 1: -1; });
	console.log("Работник с макс зарплатой - " + bookkeeping[0][0].print());
	console.log("Работник с мин зарплатой - " + bookkeeping[0][(bookkeeping[0].length - 1)]);
	bookkeeping[0].forEach(function(element) {
		sumSalary = sumSalary + element.salary;
	});
	console.log("Средняя зарплата = " + sumSalary/bookkeeping[0].length);
}

bookkeeping.push(c);

//этот метод я разработал с той мыслью, что известно заранее количество отделов. Хотя лучше было бы передавать сюда массив и с ним работать.
var d = function() {
	var redDep = getDepartmentByItsName("Red");
	var blueDep = getDepartmentByItsName("Blue");
	var greenDep = getDepartmentByItsName("Green");
	getSummSalaryByDepartment(redDep);
	getSummSalaryByDepartment(blueDep);
	getSummSalaryByDepartment(greenDep);

}

function getDepartmentByItsName(name) {
	return bookkeeping[0].filter(element => element.department == name);
}

function getSummSalaryByDepartment(array) {
	var sumSalary = 0;
	var avAge = 0;
	var maxExp = 0;
	var maxExpWorker;
	array.forEach(function(element) {
		sumSalary = sumSalary + element.salary;
		avAge = avAge + element.age;
		if (element.experience > maxExp) {
			maxExp = element.experience;
			maxExpWorker = element.name;
		}
	});
	console.log("Название отдела " + array[0].department);
	console.log("Вся зарплата по предприятию " + sumSalary);
	console.log("Средняя зарплата по предприятию " + sumSalary/array.length);
	console.log("Количество сотрудников " + array.length);
	console.log("Средний возраст сотрудников " + avAge/array.length);
	console.log("Сотрудник, который работает дольше всех " + maxExpWorker);
}

bookkeeping.push(d);

//Тестим приложение

var names = ["Андрей", "Мария", "Григорий", "Максим", "Владислав", "Петр", "Александр", "Дария", "Анастасия", "Eкатерина", "Ольга"];
var departments = ["Red", "Blue", "Green"];

//Заполним массив людьми
for (var i = 0; i <= 10; i++) {
	bookkeeping[1](true, names[i], parseInt((Math.random()*40)+20), 
				departments[parseInt(Math.random()*departments.length)], 
				parseInt((Math.random()*500)+300),
				parseInt((Math.random()*100)+20));
};
//Выводим массив, в котором должно находится 11 работников.
console.log(bookkeeping[0]);
//Удалим работника
bookkeeping[1](false, "Андрей");
//Выводим массив работников без Андрея
console.log(bookkeeping[0]);
//Пункт b
bookkeeping[2]();
//Пункт с
bookkeeping[3]();
//Пункт d
bookkeeping[4](bookkeeping[0]);









