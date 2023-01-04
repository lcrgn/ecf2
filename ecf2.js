// Je crée une function qui récupère aléatoirement mes images dans la catégorie "Nature"

function affichage() {
    fetch('https://api.unsplash.com/photos/random?client_id=fisk36mgo6ykVpR5hmERz4RuwIeT_Id80my1tXdfIrw&query=nature')
        .then(response => response.json())
        .then(json => document.querySelector(".fond").style.backgroundImage = "url('" + json.urls.raw + "')"
        )
}

affichage();

// Je crée un évenement sur mon button qui aplliquera la function "affichage" lors du clic

const monBtn = document.querySelector("#btn");
monBtn.addEventListener('click', affichage);

