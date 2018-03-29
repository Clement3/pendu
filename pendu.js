// Config
var configEssaieMaximum = 3;

var mots = [
	"chat",
	"chien",
	"maman",
];

// DOM
var el = document.getElementById("obtenirCaractere");
var motChoisi = document.getElementById("motChoisi");

// Essaie
var essaieMaximum = 3;
var essaie = 0;


var motSelectionner = obtenirMotRandom(mots);
var nombreDeCaractere = length(motSelectionner);

var caractereCacher = [];
var caractereDuMot = [];

for (var i = 0; i < nombreDeCaractere; i++) {
	caractereDuMot[i] = motSelectionner[i];
}

for (var n = 0; n < nombreDeCaractere; n++) {
	if (n === 0) {
		caractereCacher[n] = motSelectionner[0];
	} else {
		caractereCacher[n] = "*";
	}
}

motChoisi.innerHTML = "Votre mot : " + caractereCacher + ". Vous avez " + essaieMaximum + " essaie";

el.onclick = function() {
	var caractere = document.getElementById("caractere").value;
	
	if (hasCharacter(motSelectionner, caractere)) {
		
		var indexDuCaractere = getIndex(motSelectionner, caractere);
		var nombreIndex = length(indexDuCaractere);
	
		for (var k = 0; k < nombreIndex; k++) {
			caractereCacher[indexDuCaractere[k]] = caractere;
		}
		
		if (compareArray(caractereCacher, caractereDuMot)) {
			motChoisi.innerHTML = "Vous avez gagnez - Le mot est donc : " + motSelectionner + ". Il vous restez " + essaieMaximum + " essaie";
			supprimerContenu();
			rechargerLaPage();
			return;
		}

		motChoisi.innerHTML = "Votre mot : " + caractereCacher + ". Vous avez " + essaieMaximum + " essaie";

	} else {
		essaie++;
		essaieMaximum--;
		motChoisi.innerHTML = "Votre mot : " + caractereCacher + ". Vous avez " + essaieMaximum + " essaie";		
	}
	
	if(essaie > configEssaieMaximum) {
		motChoisi.innerHTML = "Vous avez perdu - Le mot était : " + motSelectionner;
		rechargerLaPage();
		return;
	}

	supprimerContenu();
}
