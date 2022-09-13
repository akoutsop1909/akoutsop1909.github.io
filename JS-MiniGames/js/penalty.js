//thetoume arxiki random timi (1, 2, i 3) gia tin amuna i epithesi tou upologisti
//boolean gia to an soutarei o paiktis
//counter gia ton termatismo tou agona
//metablites gia to skor
var pc_choice = Math.floor((Math.random()*3)+1);
var player_shoots = true;
var count = player_score = pc_score = 0;

function SwitchSide() {
	stat2.innerHTML = "blank";
	stat2.style.visibility = "hidden";
	
	//o paiktis kai o upologistis allazoun theseis
	if (player_shoots) {
		goal1.src = "../assets/penalty/goal.jpg";
		goal2.src = "../assets/penalty/pc-keeper.jpg";
		goal3.src = "../assets/penalty/goal.jpg";
		people1.src = "../assets/penalty/player.jpg";
		
		stat1.innerHTML = "Ο παίκτης έχει τη μπάλα (βάλε γκολ)";
	}
	else {
		goal1.src = "../assets/penalty/goal.jpg";
		goal2.src = "../assets/penalty/player-keeper.jpg";
		goal3.src = "../assets/penalty/goal.jpg";
		people1.src = "../assets/penalty/pc.jpg";
		
		stat1.innerHTML = "Ο υπολογιστής έχει τη μπάλα (μπλόκαρέ την)";
	}
	
	//thetoume kainourgia timi gia ton upologisti
	pc_choice = Math.floor((Math.random()*3)+1);
}

//function gia tin epanekinisi tou agona
function ResetMatch() {
	endbutton.style.visibility = "hidden";
	stat3.style.visibility = "hidden";
	stat1.style.visibility = "visible";
	player_shoots = true;
	count = player_score = pc_score = 0;
	scoreboard.rows[0].cells[5].innerHTML = 0;
	scoreboard.rows[1].cells[5].innerHTML = 0;
	for (i = 0; i < scoreboard.rows.length; i++) { //grammes
		for(j = 0; j < scoreboard.rows[i].cells.length-2; j++) { //kelia kathe gramis
			scoreboard.rows[i].cells[j].style.backgroundColor = "white"; 
		}
	}
	SwitchSide();
}

function Shoot(player_choice) {
	goal1 = document.getElementById('goal1');
	goal2 = document.getElementById('goal2');
	goal3 = document.getElementById('goal3');
	people1 = document.getElementById('people1');
	stat1 = document.getElementById('status1');
	stat2 = document.getElementById('status2');
	scoreboard = document.getElementById("scoreboard");
	
	//an to stat2 den einai adeio, den exei ginei akoma allagi ton theseon ton paikton
	if (count == 10) return;
	else if (stat2.innerHTML != "blank") {
		stat2.innerHTML = "Περίμενε λίγο...";
		return;
	}
	
	if (player_shoots) {
	
		people1.src = "../assets/penalty/player-shoot.jpg";
	
		switch(player_choice) {
			case 1: 
				if (pc_choice == 1) {
					goal1.src = "../assets/penalty/pc-keeper-block.jpg";
					goal2.src = "../assets/penalty/goal.jpg";
					goal3.src = "../assets/penalty/goal.jpg";
					Block();
				}
				else if (pc_choice == 2) {
					goal1.src = "../assets/penalty/goal-in.jpg";
					goal2.src = "../assets/penalty/pc-keeper.jpg";
					goal3.src = "../assets/penalty/goal.jpg";
					Goal();
				}
				else {
					goal1.src = "../assets/penalty/goal-in.jpg";
					goal2.src = "../assets/penalty/goal.jpg";
					goal3.src = "../assets/penalty/pc-keeper.jpg";
					Goal();
				}	
				break;
			
			case 2:
				if (pc_choice == 1) {
					goal1.src = "../assets/penalty/pc-keeper.jpg";
					goal2.src = "../assets/penalty/goal-in.jpg";
					goal3.src = "../assets/penalty/goal.jpg";
					Goal();
				}
				else if (pc_choice == 2) {
					goal1.src = "../assets/penalty/goal.jpg";
					goal2.src = "../assets/penalty/pc-keeper-block.jpg";
					goal3.src = "../assets/penalty/goal.jpg";
					Block();
				}
				else {
					goal1.src = "../assets/penalty/goal.jpg";
					goal2.src = "../assets/penalty/goal-in.jpg";
					goal3.src = "../assets/penalty/pc-keeper.jpg";
					Goal();
				}	
				break;
			
			case 3: 
				if (pc_choice == 1) {
					goal1.src = "../assets/penalty/pc-keeper.jpg";
					goal2.src = "../assets/penalty/goal.jpg";
					goal3.src = "../assets/penalty/goal-in.jpg";
					Goal();
				}
				else if (pc_choice == 2) {
					goal1.src = "../assets/penalty/goal.jpg";
					goal2.src = "../assets/penalty/pc-keeper.jpg";
					goal3.src = "../assets/penalty/goal-in.jpg";
					Goal();
				}
				else {
					goal1.src = "../assets/penalty/goal.jpg";
					goal2.src = "../assets/penalty/goal.jpg";
					goal3.src = "../assets/penalty/pc-keeper-block.jpg";
					Block();
				}	
				break;
		}
		player_shoots = false;
	}
	else {
	
		people1.src = "../assets/penalty/pc-shoot.jpg";
	
		switch(player_choice) {
			case 1: 
				if (pc_choice == 1) {
					goal1.src = "../assets/penalty/player-keeper-block.jpg";
					goal2.src = "../assets/penalty/goal.jpg";
					goal3.src = "../assets/penalty/goal.jpg";
					Block();
				}
				else if (pc_choice == 2) {
					goal1.src = "../assets/penalty/player-keeper.jpg";
					goal2.src = "../assets/penalty/goal-in.jpg";
					goal3.src = "../assets/penalty/goal.jpg";
					Goal();
				}
				else {
					goal1.src = "../assets/penalty/player-keeper.jpg";
					goal2.src = "../assets/penalty/goal.jpg";
					goal3.src = "../assets/penalty/goal-in.jpg";
					Goal();
				}	
				break;
			
			case 2:
				if (pc_choice == 1) {
					goal1.src = "../assets/penalty/goal-in.jpg";
					goal2.src = "../assets/penalty/player-keeper.jpg";
					goal3.src = "../assets/penalty/goal.jpg";
					Goal();
				}
				else if (pc_choice == 2) {
					goal1.src = "../assets/penalty/goal.jpg";
					goal2.src = "../assets/penalty/player-keeper-block.jpg";
					goal3.src = "../assets/penalty/goal.jpg";
					Block();
				}
				else {
					goal1.src = "../assets/penalty/goal.jpg";
					goal2.src = "../assets/penalty/player-keeper.jpg";
					goal3.src = "../assets/penalty/goal-in.jpg";
					Goal();
				}	
				break;
			
			case 3: 
				if (pc_choice == 1) {
					goal1.src = "../assets/penalty/goal-in.jpg";
					goal2.src = "../assets/penalty/goal.jpg";
					goal3.src = "../assets/penalty/player-keeper.jpg";
					Goal();
				}
				else if (pc_choice == 2) {
					goal1.src = "../assets/penalty/goal.jpg";
					goal2.src = "../assets/penalty/goal-in.jpg";
					goal3.src = "../assets/penalty/player-keeper.jpg";
					Goal();
				}
				else {
					goal1.src = "../assets/penalty/goal.jpg";
					goal2.src = "../assets/penalty/goal.jpg";
					goal3.src = "../assets/penalty/player-keeper-block.jpg";
					Block();
				}	
				break;
		}
		player_shoots = true;
	}
	count++;
	if (count == 10) {
		EndGame();
		return;
	}
	setTimeout(SwitchSide, 2000);
}

//function gia to mplokarisma tis mpalas
function Block() {
	stat2.innerHTML = "Μπλοκ!";
	stat2.style.visibility = "visible";
	
	if (player_shoots) {
		if (count == 0) scoreboard.rows[0].cells[count].style.backgroundColor = "red";  
		else scoreboard.rows[0].cells[count/2].style.backgroundColor = "red";  
	}
	else {
		if (count == 1) scoreboard.rows[1].cells[count-1].style.backgroundColor = "red";
		else scoreboard.rows[1].cells[(count/2)>>0].style.backgroundColor = "red";
	}
}

//function gia to gkol
function Goal() {
	stat2.innerHTML = "Γκολ!";
	stat2.style.visibility = "visible";
	
	if (player_shoots) {
		player_score++;
		scoreboard.rows[0].cells[5].innerHTML = player_score;
		if (count == 0) scoreboard.rows[0].cells[count].style.backgroundColor = "green";  
		else scoreboard.rows[0].cells[count/2].style.backgroundColor = "green";  
	}
	else {
		pc_score++;
		scoreboard.rows[1].cells[5].innerHTML = pc_score;
		if (count == 1) scoreboard.rows[1].cells[count-1].style.backgroundColor = "green";
		else scoreboard.rows[1].cells[(count/2)>>0].style.backgroundColor = "green";
	}
}

//function gia ton termatismo tou agona
function EndGame() {
	endbutton = document.getElementById('endbutton');
	stat3 = document.getElementById('status3');
	
	endbutton.style.visibility = "visible";
	stat3.style.visibility = "visible";
	stat1.style.visibility = "hidden";
	
	stat2.innerHTML = "Αποτελέσματα αγώνα";
	stat2.style.visibility = "visible";
	
	if (player_score > pc_score) stat3.innerHTML = "Κέρδισες " + player_score + " - " + pc_score;
	else if (player_score == pc_score) stat3.innerHTML = "Ισοπαλία " + player_score + " - " + pc_score;
	else stat3.innerHTML = "Έχασες " + player_score + " - " + pc_score;
}