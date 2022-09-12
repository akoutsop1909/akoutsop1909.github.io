var startTimer = -1;
var flag = false;
var hasReset = false;
var i = 0;
var sum = 0;
var seconds; 

function Reset() {
	stat.innerHTML = "blank";
	stat.style.visibility = "hidden";
	bText.value = "ΕΚΚΙΝΗΣΗ";
	bText.disabled = false;
	flag = false;
	hasReset = true;
	startTimer = -1;
	
	document.getElementById('top').src = "../assets/img/off.jpg";
	document.getElementById('middle').src = "../assets/img/off.jpg";
	document.getElementById('bottom').src = "../assets/img/off.jpg";
}

function ResetAllElse() {
	stat.innerHTML = "blank";
	stat.style.visibility = "hidden";
	result.innerHTML = "";
	bText.value = "ΕΚΚΙΝΗΣΗ";
	i = 0;
	sum = 0;
}

function EndGame() {
	mo = (sum / i).toFixed(3);
	
	stat.innerHTML = "Μέσος Όρος: " + mo + " δευτερόλεπτα";
	bText.value = "ΠΑΙΞΕ ΞΑΝΑ";
}

function ButtonClicked() {
	bText = document.getElementById('startButton');
	result = document.getElementById('result');
	stat = document.getElementById('div_status');
	
	if (bText.value == "ΠΑΙΞΕ ΞΑΝΑ") ResetAllElse();
	
	if (bText.value == "ΕΚΚΙΝΗΣΗ") {
		bText.value = "ΣΤΟΠ";
		hasReset = false;
		
		document.getElementById('top').src = "../assets/img/off.jpg";
		document.getElementById('middle').src = "../assets/img/off.jpg";
		document.getElementById('bottom').src = "../assets/img/green.jpg";
	
		choice = Math.floor((Math.random()*2)+1)
		
		if (choice == 1) {
			sec = Math.floor((Math.random()*5500)+1000);
			setTimeout(RedLight, sec);
		}
		
		else {
			sec = Math.floor((Math.random()*5500)+1000);
			setTimeout(OrangeLight, sec);
		}
	}
	
	else {
		if (startTimer == -1) {
			flag = true;
			stat.style.visibility = "visible";
			stat.innerHTML = "Ο σηματοδότης δεν ήταν κόκκινος!";
			bText.disabled = true;
			bText.value = "ΠΕΡΙΜΕΝΕ";
			setTimeout(Reset, 3000);
		}
		
		else {
			stopTimer = new Date();
			seconds = (stopTimer.getTime() - startTimer.getTime()) / 1000;
			
			stat.style.visibility = "visible";
			stat.innerHTML = "Προσπάθεια " + (i+1) + ": " + seconds + " δευτερόλεπτα";
			result.innerHTML = result.innerHTML + stat.innerHTML + "<br\>";
			bText.disabled = true;
			bText.value = "ΠΕΡΙΜΕΝΕ";
			sum = sum + seconds;
			i++;
			setTimeout(Reset, 3000);
			if (i == 5) setTimeout(EndGame, 3000);
		}
	}
}

function RedLight() {
	if (flag | hasReset) return;
	
	document.getElementById('top').src = "../assets/img/red.jpg";
	document.getElementById('middle').src = "../assets/img/off.jpg";
	document.getElementById('bottom').src = "../assets/img/off.jpg";
	startTimer = new Date();	
}

function OrangeLight() {
	if (flag | hasReset) return;
	
	document.getElementById('top').src = "../assets/img/off.jpg";
	document.getElementById('middle').src = "../assets/img/orange.jpg";
	document.getElementById('bottom').src = "../assets/img/off.jpg";	
	
	sec = Math.floor((Math.random()*5500)+1000);
	setTimeout(RedLight, sec);
}