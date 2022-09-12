//thetoume arxiki random timi (1, 2, i 3) gia tin epilogi tou upologisti
var pc_num = Math.floor((Math.random()*3)+1);

//thetoume arxiki timi 0 ston arithmo nikon tou upologisti, tou paikti kai ton isopalion
var pc_win = 0;
var player_win = 0;
var draw = 0;

function Reset() {
	//kanoume gkri tis eikones me tin epilogi tou paikti kai tou upologisti
	//oste na ksana arxisei to paixnidi
	pc_choice.src = "../assets/img/blank.jpg";
	player_choice.src = "../assets/img/blank.jpg";
	
	//thetoume kainourgia timi gia tin epilogi tou upologisti
	pc_num = Math.floor((Math.random()*3)+1);
	
	//diagrafoume to periexomeno tou div_status
	document.getElementById('div_status').innerHTML = "blank";
	stat.style.visibility = "hidden";
}

function PcWin() {
	stat.innerHTML = "Νίκη Υπολογιστή";
	pc_win += 1;
}

function PlayerWin() {
	stat.innerHTML = "Νίκη Παίκτη";
	player_win += 1;
}

//kaleitai otan o paiktis patisei opoiadipote apo tis 3 eikones me ta antikeimena
//i metabliti player_num krataei ton arithmo tis eikonas pou patise o paiktis
//o arithmos 1 antistoixei se "petra", o 2 se "psalidi" kai o 3 se "xarti"
function Play(player_num) {
	stat = document.getElementById('div_status');
	stat.style.visibility = "visible";
	//an to stat den einai adeio, den exei ginei akoma reset
	if (stat.innerHTML != "blank") {
		stat.innerHTML = "Περίμενε λίγο...";
		return;
	}
	
	pc_choice = document.getElementById('pc_choice');
	player_choice = document.getElementById('player_choice');
	
	//epilogi tou upologisti
	//dialekse "petra"
	if (pc_num == 1) pc_choice.src = "../assets/img/rock.jpg";
	//dialekse "psalidi"
	else if (pc_num == 2) pc_choice.src = "../assets/img/scissors.jpg";
	//dialekse "xarti"
	else pc_choice.src = "../assets/img/paper.jpg";
	
	//epilogi tou paikti
	//dialekse "petra"
	if (player_num == 1) player_choice.src = "../assets/img/rock.jpg";
	//dialekse "psalidi"
	else if (player_num == 2) player_choice.src = "../assets/img/scissors.jpg";
	//dialekse "xarti"
	else player_choice.src = "../assets/img/paper.jpg";
	
	//deixnoume ston paikti poios kerdise kai enimeronoume tis metablites pc_win, player_win kai draw
	if (player_num == pc_num) {
		stat.innerHTML = "Ισοπαλία!";
		draw += 1;
	}
	
	else {
		//player: petra
		if (player_num == 1) {
			//pc: psalidi
			if (pc_num == 2) PlayerWin();
			//pc: xarti
			else PcWin();
		}
		
		//player: psalidi
		else if (player_num == 2) {
			//pc: petra
			if (pc_num == 1) PcWin();
			//pc: xarti
			else PlayerWin();
		}
		
		//player: xarti
		else {
			//pc: petra
			if (pc_num == 1) PlayerWin();
			//pc: psalidi
			else PcWin();
		}
	}
	
	//enimeronoume to div me ton arithmo epituxion kai apotuxion
	document.getElementById('result').innerHTML = "Νίκες: " + player_win + ". Ήττες: " + pc_win + ". Ισοπαλίες: " + draw + ".";
	
	//ginetai reset tou paixnidiou
	setTimeout(Reset, 2200);
}