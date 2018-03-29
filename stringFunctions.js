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

function hasCharacter(word, character) {
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

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

