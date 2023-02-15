/*Début importation Analogie*/

var source = ""
var objet;
var mention = 1

fetch('analogies.json').then(function(response) {
    response.json().then(function(data) {
        console.log(data);
        for (let numCase = 0; numCase < data.length; numCase++) {
            const element = data[numCase]
            document.querySelector(".analogies").innerHTML += "<div class=Image" + (numCase+1) + "></div>" + element.image 
            + "<div class=content><h1>Si j'étais " + element.nom + "</h1>" + "<h2> Je serai " + element.valeur + "</h2>" + "<p> Car " + element.explication + "</p>"
        }
        const images = document.querySelectorAll('.Imageclickable, .image-grande').forEach(el => {
            el.addEventListener("click",function() {
                console.log("Ca marche tkt")
                source = el.getAttribute("src")
                console.log(source)
                display()
            })
        })
    })
})

/*Fin importation Analogie*/


/*Popup Image d'illustration analogie*/
function display() {
    image_grande= document.querySelector(".image-grande")
    image_grande.src=source
    el = document.querySelector(".grande-image")
    if(el.classList.contains("popup-invisible")) {
        el.classList.remove("popup-invisible")
        el.classList.add("popup-visible")
    }
    else {
        el.classList.remove("popup-visible")
        el.classList.add("popup-invisible")
    }
}

/*Fin Popup*/

/*Début formulaire*/
const submit = document.querySelector(".Envoyer")

submit.addEventListener("click", soumettre)

function soumettre() {
    const email_value = document.getElementById("email").value
    const analogie_value = document.getElementById("nom").value
    const valeur_value = document.getElementById("valeur").value
    const explication_value = document.getElementById("explication").value
    const image_value = document.getElementById("image_link").value

    objet = "https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&courriel=" + email_value + "&login=konan-hoel.lesault&message=Si_jétais_" + analogie_value + "_je serais_" + valeur_value + "_" + explication_value + "_Image:" + image_value;

    if (confirm("Êtes vous satisfait de votre analogie ?") == true) {
        if (confirm("Consentez vous à ce que vos données personelles (adresse de courriel et adresse IP) soient conservées pendant un an au maximum ? \nResponsable du traitement de vos données: Philippe Gambette (philippe.gambette@univ-eiffel.fr)") == true) {
            window.open(url)
        }    
    } 
    else {
    alert ("Bah ratio")
      }
}
/*Fin formulaire*/

/*Début mention légal*/
const mentions = document.querySelector(".mentions")
mentions.addEventListener("click", mentions_visibles)

function mentions_visibles() {
    texte_mentions()
    el = document.querySelector(".popup_mentions")
    if (el.classList.contains("popup-invisible")) {
        el.classList.remove("popup-invisible")
        el.classList.add("popup-visible")
    }
    else {
        el.classList.remove("popup-visible")
        el.classList.add("popup-invisible")
    }
}

right = document.querySelector(".right_arrow")
right.addEventListener("click", mention_suivante)


left = document.querySelector(".left_arrow")
left.addEventListener("click", mention_precedante)

const contenu_mentions = document.querySelector(".contenu_mentions")

function texte_mentions() {
    if (mention == 1) {
        contenu_mentions.innerHTML = "<h3> Images</h3> <p> Kinami.jpg : Illustration par KonanHoël Lesault </p> <p> Alt.jpg : Image de la musique landscapes de @whatisalt236 </p><p> Rose.jpg :Image faite via le mode photo du jeu vidéo Cyberpunk 2077 par Konan-Hoël Lesault </p> <p> Arcane.jpg : Illustration par KonanHoël Lesault </p><p> Clavier.jpg: Photo prise par Konan-Hoël Lesault </p> <p> Hallownest.jpg : Capture d'écran du jeu Hollow Knight de Team Cherry faite par Konan-Hoël Lesault </p><p> Désordre.jpg: Illustration par KonanHoël Lesault</p><p> Toutes les images de fond du site ont étés faites via le mode photo du jeu vidéo Cyberpunk 2077 par Konan-Hoël Lesault </p><h3> Code</h3><p> JavaScript et mention légale réalisées avec l'aide de Noah Calmette </p"
    }

    else if (mention ==2 ) {
        contenu_mentions.innerHTML = "<h3 class=textementions> Introduction </h3><p>Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, dite L.C.E.N., il est porté a la connaissance des utilisateurs et visiteurs, ci-apres l'Utilisateur', du site https://etudiant.u-pem.fr/~konan-hoel.lesault/portrait-chinois/ , ci-apres le 'Site', les présentes mentions légales. La connexion et la navigation sur le Site par l’Utilisateur implique acceptation intégrale et sans réserve des présentes mentions légales.</p>"
    }

    else if (mention == 3) {
        contenu_mentions.innerHTML = "<h3> L'Editeur </h3><p>L’édition et la direction de la publication du Site est assurée par Lesault Konan-Hoël, domicilié 5 allée des pommiers en fleurs à St Michel sur Orge, dont le numéro de téléphone est 07 62 66 68 57, et l'adresse e-mail konan.lesault@gmail.com. ci-apres l'Editeur'.</p>" 
    }

    else if (mention == 4) {
        contenu_mentions.innerHTML = "<h3>Collecte de données</h3><p>Le Site assure a l'Utilisateur une collecte et un traitement d'informations personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés. En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l'Utilisateur dispose d'un droit d'acces, de rectification, de suppression et d'opposition de ses données personnelles L'Utilisateur exerce ce droit : </br> · via un mail adressé au responsable du traitement des données  </p>"
    }
}

function mention_suivante() {
    if (mention >= 4) {
        mention = 1
        texte_mentions()
    }
    else {
    mention +=1
    texte_mentions()
    }
}

function mention_precedante() {
    if (mention <= 1) {
        mention = 4
        texte_mentions()
    }
    else {
    mention -=1
    texte_mentions()
    }
}

/*Fin mention légal*/