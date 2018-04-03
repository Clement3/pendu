// Config
var tentativeMaximum = 11;

var mots = [
	"chat",
	"chien",
	"maman",
];

// DOM
var el = document.getElementById("obtenirCaractere");
var motChoisi = document.getElementById("motChoisi");
var error = document.getElementById("erreur");
var succes = document.getElementById("succes");

// On utilise la fonction "obtenirMotRandom" pour obtenir un mot aléatoire
var motSelectionner = obtenirMotRandom(mots);
// On stock le nombre de caractère pour le mot
var nombreDeCaractere = length(motSelectionner);

// On initialise des tableaux
var caractereCacher = [];
var caractereDuMot = [];

var tentativeImage = 1;

// Temps que c'est inférieur au nombreDeCaractere 
// On stock dans le tableau "caractereDuMot" chaque caractere 1 par 1
// Pour comparer ce tableau avec "caractereCacher"
for (var i = 0; i < nombreDeCaractere; i++) {
	caractereDuMot[i] = motSelectionner[i];
}


// Temps que c'est inférieur au nombreDeCaractere
// Si l'index est à 0 on met le vrai caractere
// sinon on met des étoiles
// Stockera chaque caractere avec des étoiles
for (var n = 0; n < nombreDeCaractere; n++) {
	if (n === 0) {
		caractereCacher[n] = motSelectionner[0];
	} else {
		caractereCacher[n] = "*";
	}
}

afficherMots(caractereCacher);
tentativeRestante(tentativeMaximum);

// Quand on click sur le button
el.onclick = function() {
	// On récupère la valeur dans l'input avec id "caractere"
	var caractere = document.getElementById("caractere").value;
	
	if (verificationNombreTaper(caractere)) {

		erreur.classList.add("d-none");	

		// On utilise la fonction "testCaractere" pour tester le caractère envoyer
		// Si "testCaractere" est vrai on rentre dans la condition
		// sinon on décrèmente "tentativeMaximum"
		if (testCaractere(motSelectionner, caractere)) {
			
			// On récupère les index dans le mot selectionner par rapport au caractère
			// Exemple : notre mot est "maman" et le caractere envoyer est "m"
			// Il nous retournera un tableau avec la position du caractere dans la chaine de caractère
			// pour "maman". "m" = [0, 2] car les "m" ce trouve à la position 0 et 2
			var indexDuCaractere = getIndex(motSelectionner, caractere);

			// On récupère la longueur de notre tableau "indexDuCaractere"
			// pour notre boucle
			var nombreIndex = length(indexDuCaractere);

			// Temps que k est inférieur au "nombreIndex"
			for (var k = 0; k < nombreIndex; k++) {
				// On stock dans le tableau "caractereCacher" le caractere par rapport à l'index
				// du caractère et l'index de notre boucle
				caractereCacher[indexDuCaractere[k]] = caractere;
			}
			
			// On compare le tableau "caractereCacher" et "caractereDuMot" si c'est bon
			// on rentre dans la condition et l'utilise à gagner
			// On utilise la fonction "supprimerContenu" pour effacer l'input "caractere"
			// On recharge la page après 3s
			// on return; pour arrêter la fonction
			if (compareArray(caractereCacher, caractereDuMot)) {
				afficherMots(motSelectionner);
				tentativeRestante(tentativeMaximum);
				succes.classList.remove("d-none");		
				succes.innerHTML = "Vous avez gagnez !";
				supprimerContenu();
				rechargerLaPage();
				return;
			}

			afficherMots(caractereCacher);
			tentativeRestante(tentativeMaximum);

		} else {
			tentativeMaximum--;
			afficherMots(caractereCacher);
			tentativeRestante(tentativeMaximum);
			erreur.classList.remove("d-none");
			erreur.innerHTML = "Vous vous êtes tromper";
			
			decoupeImage(tentativeImage++);
		}
		
		// Si il n'y à plus de tentative
		if(tentativeMaximum == 0) {
			erreur.classList.remove("d-none");
			erreur.innerHTML = "Vous avez perdu ! Le mot était : " + motSelectionner;
			supprimerContenu();
			rechargerLaPage();
			return;
		}

		// On utilise la fonction "supprimerContenu" pour effacer l'input "caractere"
		// à chaque clic
		supprimerContenu();
		
	} else {
		erreur.classList.remove("d-none");		
		erreur.innerHTML = "Vous devez entrer 1 caractère uniquement";
		supprimerContenu();
	}
}
