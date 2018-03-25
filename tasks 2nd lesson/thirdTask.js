var currentDate = new Date();

var endDate = new Date();

endDate.setDate(currentDate.getDate()+1);
endDate.setHours(0);
endDate.setMinutes(0);
endDate.setSeconds(0);

console.log('До конца дня осталось ' + parseInt((endDate-currentDate)/1000/60) + ' минут.');
