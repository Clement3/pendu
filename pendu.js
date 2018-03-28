var configEssaieMaximum = 3;

var essaieMaximum = 3 +1;
var el = document.getElementById("obtenirCaractere");
var essaie = 0;

var mots = [
	"chat",
	"chien",
	"maman",
];

var caractereDonner = [];

var nombreDeMots = length(mots);
var random = getRandomInt(nombreDeMots);
var motSelectionner = mots[random];
var caractereCacher = [];
var nombreDeCaractere = length(motSelectionner);
var caractereDuMot = [];

for (var i = 0; i < nombreDeCaractere; i++) {
	caractereDuMot[i] = motSelectionner[i];
}

for (var n = 0; n < nombreDeCaractere; n++) {
	caractereCacher[n] = "*";
}

console.log("Votre mot : " + caractereCacher);

el.onclick = function() {
	var caractere = document.getElementById("caractere").value;
	
	if (hasCharacter(motSelectionner, caractere)) {
		
		var indexDuCaractere = getIndex(motSelectionner, caractere);
		var nombreIndex = length(indexDuCaractere);
	
		for (var k = 0; k < nombreIndex; k++) {
			caractereCacher[indexDuCaractere[k]] = caractere;
		}
		
		if (compareArray(caractereCacher, caractereDuMot)) {
			console.log("Vous avez gagnez - Le mot est donc : " + motSelectionner);
			return;
		}

		console.log("Vous avez fait " + caractere + ". Tableau : " + caractereCacher);
			
	} else {
		essaie++;
		essaieMaximum--;
		console.log("Mauvais caractère " + essaieMaximum + " essaie restant");
	}
	
	if(essaie > configEssaieMaximum) {
		console.log("Vous avez perdu - Le mot était : " + motSelectionner);
	}
}

function supprimerContenu(element) {
  element.value = '';
}