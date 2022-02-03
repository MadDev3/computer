var day=18,hour=18,min=18, sec=18;

function StartTimer(){
	sec--;
	if(sec<0){
		min--;
		sec = 59;
	}
	if (min<0) {
		hour--
		min = 59;
	}
	if (hour<0) {
		day--;
		hour = 23;
	}
	if(sec<10){
		document.getElementById('sec').innerHTML = "0"+sec;
	}
	else{
		document.getElementById('sec').innerHTML = sec;
	}
	if(min<10){
		document.getElementById('min').innerHTML = "0"+min;
	}
	else{
		document.getElementById('min').innerHTML = min;
	}
	if(hour<10){
		document.getElementById('hour').innerHTML = "0"+hour;
	}
	else{
		document.getElementById('hour').innerHTML = hour;
	}
	if(day<10){
		document.getElementById('day').innerHTML = "0"+day;
	}
	else{
		document.getElementById('day').innerHTML = day;
	}

}

setInterval(StartTimer,1000);