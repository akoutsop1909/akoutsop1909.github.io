//thetoume arxiki random timi (1, 2, i 3) gia to pou kribetai o papas
var king_num = Math.floor((Math.random()*3)+1);

//thetoume arxiki timi 0 ston arithmo epituxion kai apotuxion
var win = 0;
var lose = 0;

function Reset() {
	//"anapodogurizoume" ta xartia oste na ksana arxisei to paixnidi
	pic1.src = "../assets/img/card_down.jpg";
	pic2.src = "../assets/img/card_down.jpg";
	pic3.src = "../assets/img/card_down.jpg";
	
	//thetoume kainourgia timi gia to pou brisketai o papas
	king_num = Math.floor((Math.random()*3)+1);
	
	//diagrafoume to periexomeno tou div_status
	document.getElementById('div_status').innerHTML = "blank";
	stat.style.visibility = "hidden";
}

//kaleitai otan o paiktis patisei opoiadipote apo tis 3 eikones me ta anapoda xartia
//i metabliti pic_num krataei ton arithmo tis eikonas pou patise o paiktis
function findKing(pic_num) {
	stat = document.getElementById('div_status');
	stat.style.visibility = "visible";
	//an to stat den einai adeio, den exei ginei akoma reset
	if (stat.innerHTML != "blank") {
		stat.innerHTML = "Περίμενε λίγο...";
		return;
	}
	
	pic1 = document.getElementById('card1');
	pic2 = document.getElementById('card2');
	pic3 = document.getElementById('card3');

	//deixnoume ston paikti ti krubetai piso apo tin karta stin opoia ekane klik
	switch(pic_num) {
		case 1: 
			if (king_num == 1) pic1.src = "../assets/img/king.jpg";
			else pic1.src = "../assets/img/ace.png";
			break;
			
		case 2:
			if (king_num == 2) pic2.src = "../assets/img/king.jpg";
			else pic2.src = "../assets/img/ace.png";
			break;
			
		case 3: 
			if (king_num == 3) pic3.src = "../assets/img/king.jpg";
			else pic3.src = "../assets/img/ace.png";
			break;
	}
	
	//deixnoume ston paikti an kerdise kai enimeronoume tis metablites win kai lose
	if (king_num == pic_num) {
		stat.innerHTML = "Μπράβο! Τον βρήκες!";
		win += 1;
	}
	else {
		stat.innerHTML = "Ατυχία! Ξαναπροσπάθησε";
		lose += 1;
	}
	
	//enimeronoume to div me ton arithmo epituxion kai apotuxion
	document.getElementById('result').innerHTML = "Αριθμός επιτυχιών: " + win + ". Αριθμός αποτυχιών: " + lose + ".";
	
	//ginetai reset tou paixnidiou
	setTimeout(Reset, 1600);
}