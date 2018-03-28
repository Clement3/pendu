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
function countCharacter(message, charactere) {
    // On créer une variable "longueur" qui utilise la fonction length qui nous permet de 
    // récupérer la longueur de notre chaine de caractère
    var longueur = length(message);
    // On créer une variable "count" qui stockera le nombre de fois que le caractère se trouve dans 
    // la chaine de caractère
    var count = 0;

    // On parcours notre chaine de caractère
    for (var i = 0; i < longueur; i++) {

        // la variable count
        if (message[i] === charactere) {
            count++;
        }
    }

    // On retourne count
    return count;
}

function countWords(message) {
    // On créer une variable "longueur" qui utilise la fonction length qui nous permet de 
    // récupérer la longueur de notre chaine de caractère
    var longueur = length(message);  
    // On créer une variable "count" qui stockera le nombre de fois que le caractère se trouve dans 
    // la chaine de caractère
    var count = 0;

    // On parcours notre chaine de caractère
    for (var i = 0; i < longueur; i++) {
        
        // Si le caractère est vide ou i === à la longueur -1 on incrèmente "count"
        if (message[i] === " " || i === longueur -1) {
            count++;
        }
    }    

    return count;
}

function replace(message, from, to) {
    // On créer une variable "longueur" qui utilise la fonction length qui nous permet de 
    // récupérer la longueur de notre chaine de caractère    
    var longueur = length(message);
    // On initialisé une variable "word" qui stockera le resultat       
    var resultat = "";

    // On parcours notre chaine de caractère
    for (var i = 0; i < longueur; i++) {
        // Si le caractère (message[i]) est égale au param "from"
        if (message[i] === from) {
            resultat += to;
        // Sinon on stock le caractère
        } else {
            resultat += message[i];
        }
    }

    // On retourne le resultat
    return resultat;
}

function getWords(message) {
    // On créer une variable "longueur" qui utilise la fonction length qui nous permet de 
    // récupérer la longueur de notre chaine de caractère
    var longueur = length(message);
    // On initialise un tableau dans la variable "tableau"
    var tableau = [];
    // On initialisé une variable "word" qui stockera chaque mot
    var word = "";
    // On initialise une variable "count" qui stokera l'index à chaque fois qu'on stockera un mot
    var count = 0;

    // On parcours notre chaine de caractère
    for (var i = 0; i < longueur; i++) {
        // On stock dans la variable "word" chaque caractère
        word += message[i];

        // Si quand l'index du message trouve un espace ou la longueur du message est inférieur à 1
        if (message[i] === " " || i === longueur -1) {
            // On stock dans le tableau avec l'index le mot qui est dan la variable "word"
            // On utilise la fonction removeSpace pour enlever les espace avant de stocker le mot
            tableau[count] = removeSpace(word);
            // On incrémente "count"
            count++;
            // On vide la variable "word"
            word = "";
        }
    }

    // On retourne le tableau
    return tableau;
}

function hasWord(word, character) {
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

function removeSpace(word) {
    // On créer une variable "longueur" qui utilise la fonction length qui nous permet de 
    // récupérer la longueur de notre chaine de caractère 
    var longueur = length(word);
    // On initialisé une variable "word" qui stockera chaque mot    
    var resultat = "";

    // On parcours notre chaine de caractère
    for (var i = 0; i < longueur; i++) {
        // Temps qu'on détecte pas d'espace on ajoute nos caractère dans la variable "resultat"
        if (word[i] !== " ") {
            resultat += word[i];
        }
    }

    return resultat;
}

function toUppercase(charactere) {

    // On creér un objet qui stockera l'alphabet minuscle et majuscule
    var tableau = {
        a:"A", 
        b:"B", 
        c:"C",
        d:"D",
        e:"E",
        f:"F",
        g:"G",
        h:"H",
        i:"I",
        j:"J",
        k:"K",
        l:"L",
        m:"M",
        n:"N",
        o:"O",
        p:"P",
        q:"Q",
        r:"R",
        s:"S",
        t:"T",
        u:"U",
        v:"V",
        w:"W",
        v:"V",
        x:"X",
        y:"Y",
        z:"Z",
    };
    
    // on retourne le charactère en majuscule
    return tableau[charactere];
}

function firstCharactere(word) {
    // On créer une variable longueur qui stock la longueur de la chaine de caractère
    var longueur = length(word);
    // On créer une variable "resultat" qui stockera le resultat
    resultat = "";

    // Dans la variable "resultat" on ajoute le premier mot en majuscule avec la fonction 
    // "toUppercase"
    resultat += toUppercase(word[0]);

    // On créer une boucle qui ajoutera les caractère restant dans notre variable "resultat"
    for (var i = 1; i < longueur; i++) {
        resultat += word[i];
    }

    // On retourn le resultat
    return resultat;
}

function removeVoyelles(word) {
    var longueur = length(word);
    var count = 0;

    for (var i = 0; i < longueur; i++) {
        if (isVoyelles(word[i])) {
            count++;
        }
    }

    if (count > 1) {
        return true;
    }
}

function isVoyelles(charactere) {
    var tableau = {
        a: "a",
        e: "e",
        i: "i",
        o: "o",
        u: "u",
        y: "y",
    };

    if (charactere === tableau[charactere]) {
        return true;
    }
}

function isModulo(index, modulo, equal) {
    if (index % modulo == equal) {
        return true;
    }
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}
