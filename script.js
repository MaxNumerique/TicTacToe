//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const caseDeJeu = document.querySelectorAll(".caseJeu");
const TerrainDeJeu = document.querySelector(".gameboard");
let Joueur = "Joueur1";
let tour = 1;

caseDeJeu.forEach((caseJeu) => {
  caseJeu.addEventListener("click", function () {
    remplirCase(this);
  });
});

function remplirCase(caseJeu) {
  if (caseJeu.textContent == "") {
    changerJoueur();
    console.log(Joueur);
    afficherJoueurActuel();
    changerCouleur(caseJeu);
    // checkDejaRemplie(caseJeu);
    tour++;
    checkResult();
  }
}

function changerJoueur() {
  if (Joueur == "Joueur1") {
    Joueur = "Joueur2";
  } else {
    Joueur = "Joueur1";
  }
}

function afficherJoueurActuel() {
  if (Joueur == "Joueur1") {
    document.getElementById("joueurActuel").innerHTML = "Joueur 1";
  } else {
    document.getElementById("joueurActuel").innerHTML = "Joueur 2";
  }
}

function changerCouleur(caseJeu) {
  if (Joueur == "Joueur1") {
      caseJeu.style.backgroundColor = "red"; // COMMENT METTRE DES #333333 OU rgb(0, 0, 255)
      caseJeu.textContent = "X";
  } else {
      caseJeu.style.backgroundColor = "green"; // COMMENT METTRE DES #333333 OU rgb(0, 0, 255)
      caseJeu.textContent = "O";
  }
}

// function checkDejaRemplie(caseJeu) {
//   if (caseJeu.textContent == "X" || caseJeu.textContent == "O") {
//     return true;
//   }
// }


function checkResult() {
  if (tour == 10) {
    alert("Chehh ! Personne n'a gagné !");
  } else {
    // checkPuissance3();
  }
}


// function Puissance3() {
//     if (condition) {
        
//     }
// }