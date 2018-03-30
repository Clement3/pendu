function length(message) {
    // on créer une variable longueur qui initialise à 0
    var longueur = 0;

    // On créer une boucle while qui se termine quand y'a plus de charactère
    while (message[longueur] !== undefined) {
        // On incrémente la longueur
        longueur++;
    }
    
    // On retourne la longueur
    return longueur;
}

function getIndex(message, charactere) {
    var longueur = length(message);
	var resultat = [];
	
    for (var i = 0; i < longueur; i++) {
        if (message[i] === charactere) {
            resultat += i;
        }
    }
	
	return resultat;
}

function compareArray(a1, a2) {
	if (a1.length != a2.length) {
		return false;
	} else {
		for (var a = 0; a < a1.length; ++a) {
			if (a1[a] != a2[a]) {
				return false;
			}
		}
	}
	return true;
}

function testCaractere(word, character) {
    // On créer une variable "longueur" qui utilise la fonction length qui nous permet de 
    // récupérer la longueur de notre chaine de caractère 
    var longueur = length(word);
    
    for (var i = 0; i < longueur; i++) {
        // Si il a le caractere est égale au param "charactere" return true
        if (word[i] === character) {
            return true;
        }
    }
}

function obtenirNombreRandom(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function supprimerContenu() {
    // récupère l'element "caractere"
    var element = document.getElementById("caractere");	
    // Vide l'élément caractère
    element.value = '';
}

function obtenirMotRandom(tableau) {
    // On récupère la longueur du tableau
    var longueurDuTableau = length(tableau);
    // On génére un nombre aléatoire avec la fonction "obtenirNombreRandom"
    // qui prend en parametre "longueurDuTableau"
    var random = obtenirNombreRandom(longueurDuTableau);
    // On récupère le mot choisi aléatoirement dans le tableau
    var motSelectionner = tableau[random];

    return motSelectionner;
}

function rechargerLaPage() {
    // Attend 3s et recharge la page
    return window.setTimeout(function() {
        window.location.reload();
    }, 3000); 
}

function verificationNombreTaper(valeur) {
    if (valeur !== "" && length(valeur) === 1) {
        return true;
    }
}

function afficherMots(mots) {
    var longueur = length(mots);

    var output = document.getElementById("motChoisi");

    output.innerHTML = "";

    for (var i = 0; i < longueur; i++) {

        var btn = document.createElement("button");

        btn.classList.add("btn");
        btn.classList.add("btn-secondary");
        btn.textContent = mots[i];
        output.appendChild(btn);  
    }  
}

function tentativeRestante(tentative) {
    var nombreTentative = document.getElementById("nombreTentative");

    nombreTentative.innerHTML = tentative + " tentatives restante"; 
}

function InProgressReessayer() {
    var pendu = document.getElementById("pendu");
    var button = document.createElement("button");
    button.className += "btn btn-primary";
    button.textContent = "Réessayer";
    button.setAttribute("onClick", window.location.reload());
    pendu.appendChild(button);
}