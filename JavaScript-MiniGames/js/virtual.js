//kaleitai apo to body onload gia na allaksei to gif
function Start() {
	setTimeout(StandBy, 1800);
}

//function pou protrepei ton xristi na allilepidrasi me ton xaraktira
//se periptosi pou den kanei klik gia pano apo 10 deuterolepta
function CheckIdle() {
    var t;
    window.onload = resetTimer;
    window.onmousedown = resetTimer;  // catches touchscreen presses as well      
    window.ontouchstart = resetTimer; // catches touchscreen swipes as well      
    window.ontouchmove = resetTimer;  // required by some devices 
    window.onclick = resetTimer;      // catches touchpad clicks as well
    window.addEventListener('scroll', resetTimer, true); 

    function yourFunction() {
        // your function for too long inactivity goes here
        // e.g. window.location.href = 'logout.php';
		document.getElementById("txt").innerHTML = "Επέλεξε ένα θέμα συζήτησης από τα κουμπιά δεξιά. Εναλλακτικά, κλικ σε κάποιο σημείο της εικόνας.";
		Talk();
		MoodChooser();
    }

    function resetTimer() {
        clearTimeout(t);
        t = setTimeout(yourFunction, 10000);  // time is in milliseconds
    }
}
CheckIdle();

//function pou briskei se poio simeio to gif exei kanei klik o xristis
function FindPosition(oElement) {
	if(typeof(oElement.offsetParent) != "undefined") {
		for(var posX = 0, posY = 0; oElement; oElement = oElement.offsetParent) {
			posX += oElement.offsetLeft;
			posY += oElement.offsetTop;
		}
       return [posX, posY];
	}
    else return [oElement.x, oElement.y];
 }

//boolean metabliti pou ginetai false an o xristis patisei 1 fora pano sta magoula tou xaraktira
var CheeksF = true;

//thetoume arxiki timi gia ti diathesi tou xaraktira
var mood = 40;
function GetCoordinates(e) {
	var PosX = 0;
	var PosY = 0;
	var ImgPos;
	ImgPos = FindPosition(myImg);
	if (!e) var e = window.event;
	if (e.pageX || e.pageY) {
		PosX = e.pageX;
		PosY = e.pageY;
	}
	else if (e.clientX || e.clientY) {
		PosX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		PosY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	}
	PosX = PosX - ImgPos[0];
	PosY = PosY - ImgPos[1];
	document.getElementById("x").innerHTML = PosX;
	document.getElementById("y").innerHTML = PosY;
   
	//o xristis exei kanei klik se ena apo ta 2 xeria tou xaraktira
	if ((PosX > 23 && PosX < 62) || (PosX > 192 && PosX < 224)) {
		if (PosY > 542 && PosY < 566) {
			var rand = Math.floor(Math.random() * 11) + 1;
			if (rand == 1) document.getElementById("txt").innerHTML = "Θέλεις να πάμε καμιά βόλτα;";
			else if (rand == 2) document.getElementById("txt").innerHTML = "Θέλεις να μου κρατήσεις το χέρι;";
			else if (rand == 3) document.getElementById("txt").innerHTML = "Τι θα 'λεγες να πάμε να πιούμε μαζί μια ζεστή σοκολάτα;";
			else if (rand == 4) document.getElementById("txt").innerHTML = "Θέλεις να σε ξεναγήσω στην πόλη;";
			else if (rand == 5) document.getElementById("txt").innerHTML = "Έλα βόλτα μαζί μου στην </br>πόλη να δούμε τα αξιοθέατα.";
			else if (rand == 6) document.getElementById("txt").innerHTML = "Πάμε να πάρουμε κάτι να φάμε.";
			else if (rand == 7) document.getElementById("txt").innerHTML = "Πάμε για μπιλιάρδο;";
			else if (rand == 8) document.getElementById("txt").innerHTML = "Έλα. Έχουμε να κάνουμε </br>πολλά σήμερα.";
			else if (rand == 9) document.getElementById("txt").innerHTML = "Πάμε για ταινία και ποπ κορν;";
			else if (rand == 10) document.getElementById("txt").innerHTML = "Πάμε, πάμε. Έχουμε πολλά να δούμε.";
			else document.getElementById("txt").innerHTML = "Πάντα φοράω τα γάντια μου έξω το χειμώνα.";
			Talk();
			mood += 6;
			MoodChooser();
		}
	}
	
	//o xristis exei kanei klik pano sto kaskol tou xaraktira
	if ((PosX > 84 && PosX < 101) || (PosX > 156 && PosX < 187)) {
		if (PosY > 304 && PosY < 571) {
			var rand = Math.floor(Math.random() * 6) + 1; 
			if (rand == 1) document.getElementById("txt").innerHTML = "Αυτό είναι το μαύρο μου <br/>κασκόλ.";
			else if (rand == 2) document.getElementById("txt").innerHTML = "Ένα ζεστό κασκόλ είναι ό,τι <br/>πρέπει για το χειμώνα.";
			else if (rand == 3) document.getElementById("txt").innerHTML = "Δεν πάω πουθενά χωρίς το <br/>κασκόλ μου το χειμώνα.";
			else if (rand == 4) document.getElementById("txt").innerHTML = "Κρυώνεις; Θέλεις να σου <br/>δώσω το κασκόλ μου;";
			else if (rand == 5) document.getElementById("txt").innerHTML = "Το κασκόλ μαζί με τα γάντια </br>και το σκουφάκι, είναι </br>μαδάτα χειμερινά αξεσουάρ.";
			else document.getElementById("txt").innerHTML ="Το κασκόλ είναι το σήμα <br/>κατατεθέν μου.";
			Talk();
			mood += 4;
			MoodChooser();
		}
	}
	
	//o xristis exei kanei klik pano sta magoula tou xaraktira
	if ((PosX > 101 && PosX < 125) || (PosX > 140 && PosX < 168)) {
		if (PosY > 255 && PosY < 276) {
			if (CheeksF) {
				document.getElementById("txt").innerHTML = "Δε μου αρέσει να μου <br/>πειράζουν τα μάγουλα.";
				Talk();
				CheeksF = false;
				mood -= 2;
				MoodChooser();
			}
			else {
				document.getElementById("txt").innerHTML = "Σου είπα ότι δε μου αρέσει να <br/>μου πειράζουν τα μάγουλα.";
				Angry();
				mood -= 12;
				MoodChooser();
			}
		}
	}
	
	//o xristis exei kanei klik ston braxiona tou xaraktira
	if ((PosX > 34 && PosX < 69) || (PosX > 187 && PosX < 220)) {
		if (PosY > 327 && PosY < 543) {
			document.getElementById("txt").innerHTML = "Στηρίξου επάνω μου!";
			Talk();
			setTimeout(Excited, 1100);
			mood += 25;
			if (mood > 100) mood = 100;
			document.getElementById("myBar").style.width = mood+"%";
			if (mood > 75) setTimeout(Excited, 3500);
			else if (mood > 35) setTimeout(StandBy, 3500);
			else {
				document.getElementById("myBar").style.backgroundColor = "#bc2525";
				setTimeout(AngryStandBy, 3500);
			}
			BarColorChooser()
		}
	}
	
	//o xristis exei kanei klik pano sta xeilia tou xaraktira
	if (PosX > 120 && PosX < 146) {
		if (PosY > 280 && PosY < 290) {
			document.getElementById("txt").innerHTML = "Α, τέλεια! Έφερες κολατσιό;";
			Excited();
			mood += 20;
			if (mood > 100) mood = 100;
			document.getElementById("myBar").style.width = mood+"%";
			if (mood > 75) setTimeout(Excited, 2200);
			else if (mood > 35) setTimeout(StandBy, 2200);
			else {
				document.getElementById("myBar").style.backgroundColor = "#bc2525";
				setTimeout(AngryStandBy, 2200);
			}
			BarColorChooser();
		}
	}
	
	//o xristis kanei klik pano sta mallia tou xaraktira
	if (PosX > 85 && PosX < 183) {
		if (PosY > 171 && PosY < 203) {
			var rand = Math.floor(Math.random() * 6) + 1;
			if (rand == 1) document.getElementById("txt").innerHTML = "Τα μαλλιά μου είναι βαμμένα <br/>κόκκινα στην κορυφή και το φυσικό τους μαύρο στο πλάι.";
			else if (rand == 2) document.getElementById("txt").innerHTML = "Το κούρεμά μου είναι πολύ της <br/>μόδας.";
			else if (rand == 3) document.getElementById("txt").innerHTML = "Το κούρεμά μου δεν περνάει <br/>ποτέ απαρατήρητο.";
			else if (rand == 4) document.getElementById("txt").innerHTML = "Μου έχουν πει ότι το κούρεμά <br/>μου, θυμίζει καρτουν.";
			else if (rand == 5) document.getElementById("txt").innerHTML = "Την άνοιξη φοράω το καπέλο <br/>μου.";
			else document.getElementById("txt").innerHTML = "Τo χειμώνα φοράω το γκρι <br/>σκουφάκι μου.";
			Talk();
			mood += 3;
			MoodChooser();
		}
	}
	
	//o xristis kanei klik pano ston kormo tou xaraktira
	if (PosX > 102 && PosX < 150) {
		if (PosY > 339 && PosY < 488) {
			var rand = Math.floor(Math.random() * 11) + 1;
			if (rand == 1) document.getElementById("txt").innerHTML = "Μπορώ να βοηθήσω σε κάτι;";
			else if (rand == 2) document.getElementById("txt").innerHTML = "Ναι;";
			else if (rand == 3) document.getElementById("txt").innerHTML = "Παρακαλώ.";
			else if (rand == 4) document.getElementById("txt").innerHTML = "Ορίστε;";
			else if (rand == 5) document.getElementById("txt").innerHTML = "Χρειάζεσαι κάτι;";
			else if (rand == 6) document.getElementById("txt").innerHTML = "Τι είναι;";
			else if (rand ==7) document.getElementById("txt").innerHTML = "Πες μου.";
			else if (rand == 8) document.getElementById("txt").innerHTML = "Έλα.";
			else if (rand == 9) document.getElementById("txt").innerHTML = "Εδώ είμαι.";
			else if (rand == 10) document.getElementById("txt").innerHTML = "Συνέβη κάτι;";
			else document.getElementById("txt").innerHTML = "Θέλεις κάποια βοήθεια;";
			Talk();
			mood += 2;
			MoodChooser();
		}
	}
	
	//o xristis kanei klik pano sti zoni tou xaraktira
	if (PosX > 114 && PosX < 149) {
		if (PosY > 497 && PosY < 513) {
			var rand = Math.floor(Math.random() * 5) + 1;
			if (rand == 1) document.getElementById("txt").innerHTML = "Αυτή είναι η ζώνη μου.";
			else if (rand == 2) document.getElementById("txt").innerHTML = "Έχω πολλές ζώνες.";
			else if (rand == 3) document.getElementById("txt").innerHTML = "Αυτή η ζώνη είναι </br>υφασμάτινη.";
			else if (rand == 4) document.getElementById("txt").innerHTML = "Η αγκράφα της ζώνης μου </br>είναι μεταλλική.";
			else document.getElementById("txt").innerHTML = "Έχω και μία δερμάτινη ζώνη.";
			Talk();
			mood += 2;
			MoodChooser();
		}
	}
	
	//o xristis kanei klik se ena apo ta 2 autia tou xaraktira
	if ((PosX > 73 && PosX < 86) || (PosX > 180 && PosX < 193)) {
		if (PosY > 223 && PosY < 262) {
		if (mood > 35) {
			var rand = Math.floor(Math.random() * 3) + 1;
			if (rand==1) document.getElementById("txt").innerHTML = "Άουτς! Το αυτί μου!";
			else if (rand == 2) document.getElementById("txt").innerHTML = "Άσε το αυτί μου!";
			else document.getElementById("txt").innerHTML = "Μη μου τραβάς το αυτί μου! <br/>Πονάει!";
			Pain();
			mood -= 12;
			MoodChooser();
			}
			else MuchPain();
		}
	}
	
	//o xristis kanei klik pano se ena apo ta 2 matia tou xaraktira
	if ((PosX > 98 && PosX < 126) || (PosX > 138 && PosX < 168)) {
		if (PosY > 237 && PosY < 251) {
			if (mood > 35) {
				var rand = Math.floor(Math.random() * 6) + 1;
				if (rand == 1) document.getElementById("txt").innerHTML = "Πρόσεχε! Θα μου βγάλεις <br/>κανένα μάτι!";
				else if (rand == 2) document.getElementById("txt").innerHTML = "Τι κάνεις; Το μάτι μου!";
				else if (rand == 3) document.getElementById("txt").innerHTML = "Το μάτι μου, καλέ!";
				else if (rand == 4) document.getElementById("txt").innerHTML = "Αααααα! Το μάτι μου!";
				else if (rand == 5) document.getElementById("txt").innerHTML = "Ωχ, μάτι μου!";
				else document.getElementById("txt").innerHTML = "Μου πονάς το μάτι!";
				Pain();
				mood -= 14;
				MoodChooser();
			}
			else MuchPain();
		}
	}
	
	//o xristis kanei klik pano sti muti tou xaraktira
	if (PosX > 129 && PosX < 138) {
		if (PosY > 255 && PosY < 270) {
			if (mood > 35) {
				var rand = Math.floor(Math.random() * 4) + 1;
				if (rand == 1) document.getElementById("txt").innerHTML = "Άου! Μη μου πειράζεις τη <br/>μύτη μου!";
				else if (rand == 2) document.getElementById("txt").innerHTML = "Μη μου τραβάς τη <br/>μύτη μου!";
				else if (rand == 3) document.getElementById("txt").innerHTML = "Άσε τη μύτη μου ήσυχη!";
				else document.getElementById("txt").innerHTML = "Πάρε το χέρι σου από τη μύτη <br/>μου!";
				Pain();
				mood -= 6;
				MoodChooser();
			}
			else MuchPain();
		}
	}
	
	//o xristis kanei klik sto panteloni tou xaraktira
	if (PosX > 111 && PosX < 146) {
		if (PosY > 520 && PosY < 600) {
			document.getElementById("txt").innerHTML = "Ε! Τι πας να κάνεις;";
			Angry();
			setTimeout(AngryStandBy, 1800);
			mood -= 23;
			if (mood<0) mood=0;
			document.getElementById("myBar").style.width = mood+"%";
			BarColorChooser ();
		}
	}
	
	//o xristis kanei klik sto laimo tou xaraktira
	if (PosX > 104 && PosX < 150) {
		if (PosY > 300 && PosY < 331) {
			document.getElementById("txt").innerHTML = "Τρελάθηκες; Πας να με <br/>πνήξεις; Έλεος!";
			Angry();
			setTimeout(AngryStandBy, 1800);
			mood -= 25;
			if (mood < 0) mood = 0;
			document.getElementById("myBar").style.width = mood+"%";
			BarColorChooser ();
		}
	}
 }

//diafores functions pou deixnoun ti diathesi tou xaraktira allazontas to gif
function StandBy() {
    document.getElementById("img").src = "../assets/VirtualMe/StandBy.gif";
}

function AngryStandBy() {
    document.getElementById("img").src = "../assets/VirtualMe/AngryStandBy.gif";
}
	
function Talk() {
    document.getElementById("img").src = "../assets/VirtualMe/Talk.gif";
}

function Angry() {
    document.getElementById("img").src = "../assets/VirtualMe/Angry.gif";
}

function Pain() {
    document.getElementById("img").src = "../assets/VirtualMe/Pain.gif";
}

function Excited() {
    document.getElementById("img").src = "../assets/VirtualMe/Excited.gif";
}

//kanei to xaraktira na deixnei enoxlimenos otan ponaei kai den exei diathesi
function MuchPain() {
	document.getElementById("txt").innerHTML = "Σταμάτα επιτέλους να με <br/>πονάς.";
	Pain();
	setTimeout(AngryStandBy, 1800);
	mood = mood-10;
	document.getElementById("myBar").style.width = mood+"%";
	document.getElementById("myBar").style.backgroundColor = "#bc2525";
}


//allazei to gif analoga me ti diathesi tou xaraktira
function MoodChooser () {
	if (mood>100) mood=100;
	if (mood<0) mood=0;
	document.getElementById("myBar").style.width = mood+"%";
	if (mood>75) setTimeout(Excited, 1800);
	else if (mood>35) setTimeout(StandBy, 1800);
	else setTimeout(AngryStandBy, 1800);
	BarColorChooser ();
}

//allazei to xroma tis orizontias mparas analoga me ti diathesi tou xaraktira
function BarColorChooser() {
	if (mood > 75) document.getElementById("myBar").style.backgroundColor = "#0fe252";
	else if (mood > 35) document.getElementById("myBar").style.backgroundColor = "#cce018";
	else document.getElementById("myBar").style.backgroundColor = "#bc2525";
}


//function otan o xaraktiras den exei diathesi na milisei
function NoMood() {
	Angry(); 
	document.getElementById("txt").innerHTML = "Δεν έχω καθόλου διάθεση </br> για κουβέντα."; 
	setTimeout(AngryStandBy, 1800);
}


//kanei ton xaraktira na leei kati, afou xairetisei
function Wait() {
	var rand = Math.floor(Math.random() * 6) + 1; 
	if (rand == 1) document.getElementById("txt").innerHTML = "Λοιπόν; Ας κάνουμε κάτι!";
	else if (rand == 2) document.getElementById("txt").innerHTML = "Θα ήθελες να κάνουμε κάτι <br/> ενδιαφέρον σήμερα;";
	else if (rand == 3) document.getElementById("txt").innerHTML = "Είναι μια ωραία μέρα για να <br/> εξερευνήσει κανείς τον κόσμο <br/> και να ανακαλύψει τα μυστικά <br/>του.";
	else if (rand == 4) document.getElementById("txt").innerHTML = "Υπάρχει κάτι που θα ήθελες <br/> να μάθεις;";
	else if (rand == 5) document.getElementById("txt").innerHTML = "Ποτέ δεν είναι αργά για να <br/>  πετύχεις τους στόχους σου.";
	else document.getElementById("txt").innerHTML = "Άκουσε την καρδιά σου και <br/> ακολούθησε το μονοπάτι της <br/>ψυχής σου.";
}

//xairetaei ton xristi
function Hello() {
	if (mood > 35) {
		var rand = Math.floor(Math.random() * 20) + 1; 
		if (rand == 1) document.getElementById("txt").innerHTML = "Καλά είμαι, ευχαριστώ. Εσύ πώς είσαι;";
		else if (rand == 2) document.getElementById("txt").innerHTML = "Μια χαρά, εσύ;";
		else  if (rand == 3) document.getElementById("txt").innerHTML = "Μια χαρά. Τι θα ήθελες να κάνουμε σήμερα;";
		else  if (rand == 4) document.getElementById("txt").innerHTML = "Θα ήθελες να μάθεις περισσότερα για εμένα;";
		else  if (rand == 5) document.getElementById("txt").innerHTML = "Έχω όρεξη για κάτι ενδιαφέρον σήμερα.";
		else  if (rand == 6) document.getElementById("txt").innerHTML = "Σου έχω κάτι ενδιαφέρον σήμερα.";
		else  if (rand == 7) document.getElementById("txt").innerHTML = "Καλά είμαι. Εσύ πώς είσαι σήμερα;";
		else  if (rand == 8) document.getElementById("txt").innerHTML = "Εγώ μια χαρά. Εσύ τι θα 'λεγες να συζητήσουμε για κάτι ενδιαφέρον;";
		else  if (rand == 9) document.getElementById("txt").innerHTML = "Θες να σου πω μια παροιμία;";
		else  if (rand == 10) document.getElementById("txt").innerHTML = "Δε βλέπω την ώρα να μοιραστώ τις γνώσεις μου. Υπάρχει κάτι που θα ήθελες να μάθεις;";
		else  if (rand == 11) document.getElementById("txt").innerHTML = "Μια χαρά. Ας συζητήσουμε για κάτι.";
		else  if (rand == 12) document.getElementById("txt").innerHTML = "Όλα καλά. Μπορείς να με ρωτήσεις ό,τι θέλεις.";
		else  if (rand == 13) document.getElementById("txt").innerHTML = "Περιμένω με ανυπομονησία τις απορίες σου.";
		else  if (rand == 14) document.getElementById("txt").innerHTML = "Σου εύχομαι να είσαι πάντα καλά.";
		else  if (rand == 15) document.getElementById("txt").innerHTML = "Καλά είμαι. Τι λες να κάνουμε σήμερα;";
		else  if (rand == 16) document.getElementById("txt").innerHTML = "Καλά, εσύ;";
		else  if (rand == 17) document.getElementById("txt").innerHTML = "Ξέρω πολλές παροιμίες. Θες να σου πω μία;";
		else  if (rand == 18) document.getElementById("txt").innerHTML = "Μια χαρά. Έχουμε να κάνουμε αρκετά σήμερα.";
		else  if (rand == 19) document.getElementById("txt").innerHTML = "Ας εξερευνήσουμε τον κόσμο και τα μυστικά του.";
		else  document.getElementById("txt").innerHTML = "Πολύ καλά. Εσύ τι λες για λίγη καλή κουβέντα;";
		Talk();
		MoodChooser();
		}
	else NoMood();
}

//kanei ton xaraktira na leei kati gia ton eauto tou
function Personal() {
	if (mood > 35) {
		var rand = Math.floor(Math.random() * 22) + 1; 
		if (rand == 1) document.getElementById("txt").innerHTML = "Μου αρέσει ο προγραμματισμός.";
		else if (rand == 2) document.getElementById("txt").innerHTML = "Μου αρέσει να φοράω το σκουφάκι, το κασκόλ και τα γάντια μου το χειμώνα.";
		else  if (rand == 3) document.getElementById("txt").innerHTML = "Μου αρέσει να βλέπω χιόνι το χειμώνα.";
		else  if (rand == 4) document.getElementById("txt").innerHTML = "Μου αρέσει το ping <br/>pong και το μπιλιάρδο.";
		else  if (rand == 5) document.getElementById("txt").innerHTML = "Μου αρέσει να παρακολουθώ ομιλίες και διαλέξεις.";
		else  if (rand == 6) document.getElementById("txt").innerHTML = "Έχω συλλογή από <br/>γραμματόσημα.";
		else  if (rand == 7) document.getElementById("txt").innerHTML = "Δεν τα πάω και πολύ καλά με τη ζωγραφική, αλλά όταν έχω έμπνευση, δημιουργώ.";
		else  if (rand == 8) document.getElementById("txt").innerHTML = "Ποτέ δε χάνω την ευκαιρία να εξερευνώ καινούργια μέρη.";
		else  if (rand == 9) document.getElementById("txt").innerHTML = "Μου αρέσει η ιαπωνική <br/>κουλτούρα και κουζίνα.";
		else  if (rand == 10) document.getElementById("txt").innerHTML = "Στο github μου θα βρεις περισσότερα project.";
		else  if (rand == 11) document.getElementById("txt").innerHTML = "Μου αρέσει η γιορτινή <br/>ατμόσφαιρα των <br/>Χριστουγέννων.";
		else  if (rand == 12) document.getElementById("txt").innerHTML = "Είχα κατοικίδιο καναρίνι.";
		else  if (rand == 13) document.getElementById("txt").innerHTML = "Είχα δύο πάπιες στο χωριό.";
		else  if (rand == 14) document.getElementById("txt").innerHTML = "Το μπλε είναι το αγαπημένο μου χρώμα.";
		else  if (rand == 15) document.getElementById("txt").innerHTML = "Η πτυχιακή μου αφορούσε την φόρτηση ηλεκτρικών οχημάτων.";
		else  if (rand == 16) document.getElementById("txt").innerHTML = "Σπούδασα πληροφορική στο ΑΤΕΙ Θεσσαλονίκης.";
		else  if (rand == 17) document.getElementById("txt").innerHTML = "Μου αρέσει να μαθαίνω καινούργια πράγματα.";
		else  if (rand == 18) document.getElementById("txt").innerHTML = "Η πτυχιακή μου υλοποιήθηκε σε γλώσσα R.";
		else  if (rand == 19) document.getElementById("txt").innerHTML = "Μου αρέσει η συγγραφή και η επιμέλεια κειμένου.";
		else  if (rand == 20) document.getElementById("txt").innerHTML = "Σπούδασα στο ΜΠΣ 'Ευφυείς Τεχνολογίες Διαδικτύου'.";
		else  if (rand == 21) document.getElementById("txt").innerHTML = "Μου αρέσει να εμπλουτίζω τις γνώσεις μου στον προγραμματισμό.";
		else  document.getElementById("txt").innerHTML = "Έχω πτυχίο Proficiency στα Αγγλικά.";
		Talk();
		mood += 3;
		MoodChooser();
		}
	else NoMood();
}

//kanei ton xaraktira na leei kati endiaferon
function Facts() {
	if (mood > 35) {
		var rand = Math.floor(Math.random() * 38) + 1; 
		if (rand == 1) document.getElementById("txt").innerHTML = "Ένα λέιζερ μπορεί να </br>παγιδευτεί στο νερό.";
		else  if (rand == 2) document.getElementById("txt").innerHTML = "Το οξυγόνο της Γης </br>παράγεται από τον ωκεανό.";
		else  if (rand == 3) document.getElementById("txt").innerHTML = "Τα ζώα χρησιμοποιούν το μαγνητικό πεδίο της Γης για προσανατολισμό.";
		else  if (rand == 4) document.getElementById("txt").innerHTML = "Το ζεστό νερό παγώνει πιο γρήγορα από το κρύο.";
		else  if (rand == 5) document.getElementById("txt").innerHTML = "Το νερό μπορεί να υπάρχει </br>σε τρεις καταστάσεις ταυτόχρονα.";
		else  if (rand == 6) document.getElementById("txt").innerHTML = "Η μπύρα είναι δύο φορές πιο αφρώδης από τη σαμπάνια.";
		else  if (rand == 7) document.getElementById("txt").innerHTML = "Το μόνο γράμμα που δεν εμφανίζεται στον περιοδικό πίνακα είναι το J.";
		else  if (rand == 8) document.getElementById("txt").innerHTML = "Το κρύο νερό θερμαίνεται πιο γρήγορα από το ζεστό νερό.";
		else  if (rand == 9) document.getElementById("txt").innerHTML = "Ο πλατύποδας είναι ένα θηλαστικό που γεννά αυγά.";
		else  if (rand == 10) document.getElementById("txt").innerHTML = "Μόνο τα κολίβρια μπορούν </br>να πετάξουν προς τα πίσω.";
		else  if (rand == 11) document.getElementById("txt").innerHTML = "Οι πολικές αρκούδες δεν </br>έχουν φυσικούς εχθρούς.";
		else  if (rand == 12) document.getElementById("txt").innerHTML = "Οι ωκεανοί βοηθούν στη διάδοση της θερμότητας από τον Ήλιο σε όλο τον κόσμο.";
		else  if (rand == 13) document.getElementById("txt").innerHTML = "Η Γη είναι σχεδόν σφαιρική. </br>Οι πόλοι είναι ελαφρώς πεπλατυσμένοι.";
		else  if (rand == 14) document.getElementById("txt").innerHTML = "Η Γη περιστρέφεται μια φορά στον άξονά της σε 23 ώρες, </br>56 λεπτά και 4 δευτερόλεπτα.";
		else  if (rand == 15) document.getElementById("txt").innerHTML = "Το μέσο ανθρώπινο σώμα αποτελείται από 50 έως 65 </br>τοις εκατό νερό.";
		else  if (rand == 16) document.getElementById("txt").innerHTML = "Η Λάικα ήταν το πρώτο ζώο στο διάστημα.";
		else  if (rand == 17) document.getElementById("txt").innerHTML = "Οι περισσότεροι δεινόσαυροι είναι γνωστοί από ένα μόνο δόντι ή οστό.";
		else  if (rand == 18) document.getElementById("txt").innerHTML = "Το ήλιο αλλάζει τη φωνή μας λόγω της πυκνότητάς του.";
		else  if (rand == 19) document.getElementById("txt").innerHTML = "Ο τόνος έχει την υψηλότερη περιεκτικότητα σε πρωτεΐνη </br>για τα ψάρια.";
		else  if (rand == 20) document.getElementById("txt").innerHTML = "Το βολφράμιο είναι το σκληρότερο μέταλλο.";
		else  if (rand == 21) document.getElementById("txt").innerHTML = "Το μεγαλύτερο ρομπότ στον κόσμο ζυγίζει 11 τόνους.";
		else  if (rand == 22) document.getElementById("txt").innerHTML = "Τα διαμάντια είναι η πιο </br>σκληρή φυσική ουσία.";
		else  if (rand == 23) document.getElementById("txt").innerHTML = "Ο Ειρηνικός Ωκεανός είναι ο μεγαλύτερος όγκος νερού </br>στον κόσμο.";
		else  if (rand == 24) document.getElementById("txt").innerHTML = "Η πυκνότητα του πάγου είναι 10% μικρότερη από αυτή του νερού.";
		else  if (rand == 25) document.getElementById("txt").innerHTML = "Ο ήλιος δεν αλλάζει χρώμα κατά τη δύση του ηλίου.";
		else  if (rand == 26) document.getElementById("txt").innerHTML = "Ο ήχος δημιουργεί θερμότητα.";
		else  if (rand == 27) document.getElementById("txt").innerHTML = "Το μετάξι είναι το ισχυρότερο φυσικό υλικό.";
		else  if (rand == 28) document.getElementById("txt").innerHTML = "Η αστρονομία είναι η αρχαιότερη επιστήμη.";
		else  if (rand == 29) document.getElementById("txt").innerHTML = "Η γεωμετρία προέρχεται από </br>τη Μεσοποταμία και την Αίγυπτο γύρω στο 2000 π.Χ.";
		else  if (rand == 30) document.getElementById("txt").innerHTML = "Υπάρχουν 118 χημικά </br>στοιχεία.";
		else  if (rand == 31) document.getElementById("txt").innerHTML = "Χρειάζονται 8 λεπτά και 19 δευτερόλεπτα για να ταξιδέψει το φως από τον Ήλιο στη Γη.";
		else  if (rand == 32) document.getElementById("txt").innerHTML = "Η Γη είναι ένας τεράστιος μαγνήτης.";
		else  if (rand == 33) document.getElementById("txt").innerHTML = "Η Αφροδίτη είναι ο μόνος πλανήτης που περιστρέφεται δεξιόστροφα.";
		else  if (rand == 34) document.getElementById("txt").innerHTML = "Τα σύννεφα φαίνονται λευκά επειδή αντανακλούν το φως του ήλιου από πάνω τους.";
		else  if (rand == 35) document.getElementById("txt").innerHTML = "Ο ήχος δεν μεταφέρεται στο διάστημα.";
		else  if (rand == 36) document.getElementById("txt").innerHTML = "Οι δακτύλιοι του Κρόνου είναι φτιαγμένοι από τρισεκατομμύρια κομμάτια πάγου σε τροχιά.";
		else  if (rand == 37) document.getElementById("txt").innerHTML = "Ο πυρήνας της Γης είναι τόσο καυτός όσο η επιφάνεια του ήλιου.";
		else  document.getElementById("txt").innerHTML = "Υπάρχουν περισσότερα από 391.000 γνωστά είδη φυτών στον κόσμο.";
		Talk();
		mood += 3;
		MoodChooser();
	}
	else NoMood();
}

//kanei ton xaraktira na leei mia random paroimia
function Proverbs() {
	if (mood > 35) {
		var rand = Math.floor(Math.random() * 38) + 1; 
		if (rand == 1) document.getElementById("txt").innerHTML = "Μπρος γκρεμός και πίσω <br/>ρέμα.";
		else  if (rand == 2) document.getElementById("txt").innerHTML = "Μάρτης γδάρτης και κακός <br/>παλουκοκαύτης.";
		else  if (rand == 3) document.getElementById("txt").innerHTML = "Η καλή μέρα απ’ το πρωί <br/>φαίνεται.";
		else  if (rand == 4) document.getElementById("txt").innerHTML = "Ο ύπνος θρέφει τα μωρά κι ο <br>ήλιος τα μοσχάρια.";
		else  if (rand == 5) document.getElementById("txt").innerHTML = "Σκύλος που γαβγίζει, δεν <br/>δαγκώνει.";
		else  if (rand == 6) document.getElementById("txt").innerHTML = "Ζήσε Μάη μου να φας τριφύλλι.";
		else  if (rand == 7) document.getElementById("txt").innerHTML = "Έμεινε πανί με πανί.";
		else  if (rand == 8) document.getElementById("txt").innerHTML = "Κύλισε ο τέντζερης και βρήκε <br/>το καπάκι.";
		else  if (rand == 9) document.getElementById("txt").innerHTML = "Τραβάτε με κι ας κλαίω.";
		else  if (rand == 10) document.getElementById("txt").innerHTML = "Από δυο χωριά χωριάτες.";
		else  if (rand == 11) document.getElementById("txt").innerHTML = "Γυρεύει βελόνα στ’ άχυρα.";
		else  if (rand == 12) document.getElementById("txt").innerHTML = "Σαν το σκύλο με τη γάτα.";
		else  if (rand == 13) document.getElementById("txt").innerHTML = "Πράσσειν άλογα.";
		else  if (rand == 14) document.getElementById("txt").innerHTML = "Μπάτε σκύλοι αλέστε και <br/>αλεστικά μη δώσετε.";
		else  if (rand == 15) document.getElementById("txt").innerHTML = "Του έψησε το ψάρι στα χείλη.";
		else  if (rand == 16) document.getElementById("txt").innerHTML = "Τα ίδια Παντελάκη μου, τα ίδια Παντελή μου.";
		else  if (rand == 17) document.getElementById("txt").innerHTML = "Ήρθαν τα’ άγρια να διώξουν τα ήμερα.";
		else  if (rand == 18) document.getElementById("txt").innerHTML = "Χρωστάει της Μιχαλούς.";
		else  if (rand == 19) document.getElementById("txt").innerHTML = "Η αλεπού εκατό, το <br/>αλεπουδάκι εκατόν δέκα.";
		else  if (rand == 20) document.getElementById("txt").innerHTML = "Κάθεται σε αναμμένα <br/>κάρβουνα.";
		else  if (rand == 21) document.getElementById("txt").innerHTML = "Κάνει την πάπια.";
		else  if (rand == 22) document.getElementById("txt").innerHTML = "Ό, τι λάμπει δεν είναι χρυσός.";
		else  if (rand == 23) document.getElementById("txt").innerHTML = "Όπου ακούς πολλά κεράσια, <br/>κράτα και μικρό καλάθι.";
		else  if (rand == 24) document.getElementById("txt").innerHTML = "Καθαρός ουρανός, <br/>αστραπές δεν φοβάται.";
		else  if (rand == 25) document.getElementById("txt").innerHTML = "Πήγε για μαλλί και βγήκε <br/>κουρεμένος.";
		else  if (rand == 26) document.getElementById("txt").innerHTML = "Λείπει η γάτα, χορεύουν τα <br/>ποντίκια.";
		else  if (rand == 27) document.getElementById("txt").innerHTML = "Τον έπιασαν στα πράσα.";
		else  if (rand == 28) document.getElementById("txt").innerHTML = "Ο καλός ο μύλος όλα τα αλέθει.";
		else  if (rand == 29) document.getElementById("txt").innerHTML = "Σαν την καλαμιά στον κάμπο.";
		else  if (rand == 30) document.getElementById("txt").innerHTML = "Κάνε το καλό και ρίχτο στο <br/>γιαλό.";
		else  if (rand == 31) document.getElementById("txt").innerHTML = "Κάποιο λάκκο έχει η φάβα.";
		else  if (rand == 32) document.getElementById("txt").innerHTML = "Κάθε κατεργάρης στον πάγκο <br/>του.";
		else  if (rand == 33) document.getElementById("txt").innerHTML = "Φυτρώνει εκεί που δεν τον <br/>σπέρνουν.";
		else  if (rand == 34) document.getElementById("txt").innerHTML = "Ο κόσμος το’ χει τούμπανο κι <br/>εμείς κρυφό καμάρι.";
		else  if (rand == 35) document.getElementById("txt").innerHTML = "Άλλαξε ο Μανωλιός και έβαλε <br/>τα ρούχα του αλλιώς.";
		else  if (rand == 36) document.getElementById("txt").innerHTML = "Από την πόλη έρχομαι και στην κορυφή κανέλα.";
		else  if (rand == 37) document.getElementById("txt").innerHTML = "Των φρονίμων τα παιδιά πριν πεινάσουν μαγειρεύουν.";
		else  document.getElementById("txt").innerHTML = "Το έξυπνο πουλί από τη μύτη <br/>πιάνεται.";
		Talk();
		mood += 3;
		MoodChooser();
	}
	else NoMood();
}

//o xaraktiras dexetai sugnomi mono otan exei kaki diathesi
function Apology() {
	if (mood > 35) {
		var rand = Math.floor(Math.random() * 7) + 1; 
		if (rand == 1) document.getElementById("txt").innerHTML = "Δε χρειάζεται.";
		else  if (rand == 2) document.getElementById("txt").innerHTML = "Για ποιο λόγο;";
		else  if (rand == 3) document.getElementById("txt").innerHTML = "Δε με πείραξες.";
		else  if (rand == 4) document.getElementById("txt").innerHTML = "Εντάξει, δεν έγινε κάτι σοβαρό.";
		else  if (rand == 5) document.getElementById("txt").innerHTML = "Δεν πειράζει.";
		else  if (rand == 6) document.getElementById("txt").innerHTML = "Όλα καλά.";
		else  document.getElementById("txt").innerHTML = "Μα δε μου έκανες κάτι κακό.";
		Talk();
		MoodChooser();
	}
	else {
		var rand = Math.floor(Math.random() * 8) + 1; 
		if (rand == 1) document.getElementById("txt").innerHTML = "Εντάξει.";
		else  if (rand == 2) document.getElementById("txt").innerHTML = "Τουλάχιστον ζήτησες συγνώμη.";
		else  if (rand == 3) document.getElementById("txt").innerHTML = "Ελπίζω να κατάλαβες το </br>λάθος σου.";
		else  if (rand == 4) document.getElementById("txt").innerHTML = "Δεκτή.";
		else  if (rand == 5) document.getElementById("txt").innerHTML = "Εντάξει, ας το ξεχάσουμε.";
		else  if (rand == 6) document.getElementById("txt").innerHTML = "Ουφ, τέλος πάντων.";
		else  if (rand == 7) document.getElementById("txt").innerHTML = "Άντε, καλά.";
		else  document.getElementById("txt").innerHTML = "Σε συγχωρώ.";
		Talk();
		mood = 36;
		Angry();
		MoodChooser();
	}
}