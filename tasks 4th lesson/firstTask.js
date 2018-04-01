document.getElementById('userAgent').innerHTML=(navigator.userAgent).toString();
document.getElementById('appName').innerHTML=(navigator.appName).toString();
document.getElementById('appVersion').innerHTML=(navigator.appVersion).toString();
document.getElementById('connection').innerHTML=("downlink: " + navigator.connection.downlink + 
	 " effective Type: " + navigator.connection.effectiveType + 
	 " on Change: " + navigator.connection.onchange + " rtt: " + navigator.connection.rtt + " saveDate: " + navigator.connection.saveData).toString();
document.getElementById('language').innerHTML=(navigator.language).toString();
document.getElementById('cookie').innerHTML=(navigator.cookieEnabled).toString();