var image = document.getElementById("reactImage");

// Attends de detecter l'evenement 'click' sur l'élément 'reactImage' et execute les instructions dans le callback
image.addEventListener('click', function() {
    image.src = "https://cdn-images-1.medium.com/max/900/1*G2QwxPF2TvWXzRUnA4axoA.png";
});

// Execute les instructions dans la fonction de callback tout les X ms
setInterval(function() {
    // Ajoute ou enleve la classe blink de l'element image
    image.classList.toggle('blink');
}, 1000);

// Execute les instructions dans la focntion de callback après X ms
setTimeout(function() {
    document.getElementById('monId').style.color = 'lightblue';
}, 1000);


/*
* Requête asynchrone de films sur l'API https://setheal-api-films.herokuapp.com
*/

var xhr = new XMLHttpRequest(); // etape 0

// Fonction qui est appelée à chaque changement de statut de la requête
xhr.onreadystatechange = function() {
    // Si le statut est à 4, alors nous avons une réponse
    if (xhr.readyState == 4 && xhr.status == 200) {

        // récupération des données et affichage de chaque affiche de film
        var display = document.getElementById('display');

        var json = JSON.parse(xhr.responseText);
        
        json.forEach(function(film) {
            display.innerText += film.title;
            var newImage = document.createElement('img');
            newImage.src = "https://setheal-api-films.herokuapp.com" + film.poster
            document.getElementById('listImages').appendChild(newImage);
        });
    }
};

xhr.open("GET", 'https://setheal-api-films.herokuapp.com/films'); // etape 1

xhr.send(null); //etape 2



/* 
* Nouvelle façon d'écrire les fonctions
*/

// ECMAscript 5
function carre(x) {
    console.log(x*x);
}

// ECMAscript 6
carre2 = (x) => {
    console.log(x*x);
}

carre3 = (x) => console.log(x*x);

carre4 = x => console.log(x*x);


// Nouvelle façon de définir les variables

const i = 10; // Constante
let j = 11; // variable

/*
* Nouvelle façon de concaténer des variables avec une string
*/

let phrase = "I est egale a " + i + " et j est egale a " + j;

let phraseES6 = `I est egale a ${i} et j est egale a ${j}`;


// Definition d'une classe

class User {

    // Constructeur executer lorsqu'un nouvel objet est créer
    constructor(lastname, firstname) {
        this.lastname = lastname;
        this.firstname = firstname;
    }
    
    displayFullname() {
        console.log(`Vous vous appelez ${this.lastname} ${this.firstname}`);
    }
}

// Classe qui hérite de la classe User, elle possède les mêmes attributs et méthodes que User
class Character extends User {
    constructor(lastname, firstname, pseudo) {
        super(lastname, firstname);
        this.pseudo = pseudo;
    }

    displayPseudo() {
        console.log(`Votre pseudo est ${this.pseudo}`);
    }
}

// Instancier un objet à partir d'une classe
let newUser = new User('Barciet', 'Maelann');
// Appeler une méthode
newUser.displayFullname();

let charcater = new Character('Barciet', 'Maelann', 'setheal');
charcater.displayFullname();
charcater.displayPseudo();
