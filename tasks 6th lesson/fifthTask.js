var validatorButton = document.getElementById("validateButton");

var regExpName = /^[а-яА-ЯёЁa-zA-Z0-9\s\-]{3,20}$/;
var regExpEmail = /[a-zA-z][a-zA-z0-9\_\-\.]*@[a-z][a-z0-9]*\.[a-z]{2,10}\.?/;
var regExpPhone = /^\+?\d{3}\(?\d{2}\)?\d{3}(\-?\d{2}){2}$/;
var regExpAddress = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/;



function validateName(argument) {
	// body...
	if (!regExpName.test(argument.value)) {
		document.getElementById("errors").innerHTML = "Name wrong enter!";
	}  else {
		document.getElementById("errors").innerHTML = "";
	}
};

function validatePhone(argument) {
	// body...
	if (!regExpPhone.test(argument.value)) {
		document.getElementById("errors").innerHTML = "Phone wrong enter!";
	} else {
		document.getElementById("errors").innerHTML = "";
	}
};

function validateEmail(argument) {
	// body...
	if (!regExpEmail.test(argument.value)) {
		document.getElementById("errors").innerHTML = "Email wrong enter!";
	} else {
		document.getElementById("errors").innerHTML = "";
	}
};

function validateAddress(argument) {
	// body...
	if (!regExpAddress.test(argument.value)) {
		document.getElementById("errors").innerHTML = "WebAddress wrong enter!";
	} else {
		document.getElementById("errors").innerHTML = "";
	}
};


function validateAge(argument) {
	// body...
	var age = parseInt(argument.value);
	if (!(age >= 14 && age <= 90)) {
		document.getElementById("errors").innerHTML = "Age wrong enter!";
	} else {
		document.getElementById("errors").innerHTML = "";
	}
};

function validateAll() {
	// body...
	var name = document.getElementById("name").value;
	var phone = document.getElementById("phone").value;
	var email = document.getElementById("email").value;
	var address = document.getElementById("address").value;
	var age = parseInt(document.getElementById("age").value);

	var errors = "";

	errors += regExpName.test(name) ? "" : "Name ";
	errors += regExpPhone.test(phone) ? "" : "Phone ";
	errors += regExpEmail.test(email) ? "" : "Email ";
	errors += regExpAddress.test(address) ? "" : "WebAddress ";
	errors += age >= 14 && age <= 90 ? "" : "Age ";

	if (errors.lenght == 0) {
		document.getElementById("errors").innerHTML = "There is errors in next filelds: " + errors;
	} else {
		document.getElementById("errors").innerHTML = "Everything is ok!";
	}

};