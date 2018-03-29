var configEssaieMaximum = 3;

var essaieMaximum = 3;
var el = document.getElementById("obtenirCaractere");
var pendu = document.getElementById("pendu");
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
	if (n === 0) {
		caractereCacher[n] = motSelectionner[0];
	} else {
		caractereCacher[n] = "*";
	}
}

var motChoisi = document.getElementById("motChoisi");
motChoisi.textContent = "Votre mot : " + caractereCacher + ". Vous avez " + essaieMaximum + " essaie";

el.onclick = function() {
	var caractere = document.getElementById("caractere").value;
	
	if (hasCharacter(motSelectionner, caractere)) {
		
		var indexDuCaractere = getIndex(motSelectionner, caractere);
		var nombreIndex = length(indexDuCaractere);
	
		for (var k = 0; k < nombreIndex; k++) {
			caractereCacher[indexDuCaractere[k]] = caractere;
		}
		
		if (compareArray(caractereCacher, caractereDuMot)) {
			motChoisi.textContent = "Vous avez gagnez - Le mot est donc : " + motSelectionner + ". Vous avez " + essaieMaximum + " essaie";
			return;
		}

		motChoisi.textContent = "Votre mot : " + caractereCacher + ". Vous avez " + essaieMaximum + " essaie";

	} else {
		essaie++;
		essaieMaximum--;
		motChoisi.textContent = "Votre mot : " + caractereCacher + ". Vous avez " + essaieMaximum + " essaie";		
	}
	
	if(essaie > configEssaieMaximum) {
		motChoisi.textContent = "Vous avez perdu - Le mot était : " + motSelectionner;
	}
}

function supprimerContenu(element) {
  element.value = '';
}

pendu.appendChild(motChoisi);
