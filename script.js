//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const caseDeJeu = document.querySelectorAll(".caseJeu");
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
    afficherJoueurActuel();
    changerCouleur(caseJeu);
    checkLigne();
    checkColonne();
    checkDiagonale();
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
    caseJeu.style.backgroundColor = "purple"; 
    caseJeu.textContent = "X";
  } else {
    caseJeu.style.backgroundColor = "grey"; 
    caseJeu.textContent = "O";
  }
}

function checkResult() {
  if (tour == 10) {
    alert("Chehh ! Personne n'a gagné !");
  }
}

const ligne1 = [caseDeJeu[0], caseDeJeu[1], caseDeJeu[2]];
const ligne2 = [caseDeJeu[3], caseDeJeu[4], caseDeJeu[5]];
const ligne3 = [caseDeJeu[6], caseDeJeu[7], caseDeJeu[8]];

const colonne1 = [caseDeJeu[0], caseDeJeu[3], caseDeJeu[6]];
const colonne2 = [caseDeJeu[1], caseDeJeu[4], caseDeJeu[7]];
const colonne3 = [caseDeJeu[2], caseDeJeu[5], caseDeJeu[8]];

const diagonale1 = [caseDeJeu[0], caseDeJeu[4], caseDeJeu[8]];
const diagonale2 = [caseDeJeu[2], caseDeJeu[4], caseDeJeu[6]];

const lignes = [ligne1, ligne2, ligne3];
const colonnes = [colonne1, colonne2, colonne3];
const diagonales = [diagonale1, diagonale2];

function checkLigne() {
    
  for (let i = 0; i < lignes.length; i++) {
    if (lignes[i][0].textContent == "X" && lignes[i][1].textContent == "X" && lignes[i][2].textContent == "X") {
        alert('Joueur 2 gagne');
    } else if (lignes[i][0].textContent == "O" && lignes[i][1].textContent == "O" && lignes[i][2].textContent == "O") {
        alert('Joueur 2 gagne');
    }
  }
}

function checkColonne() {
    for (let i = 0; i < colonnes.length; i++) {
        if (colonnes[i][0].textContent == "X" && colonnes[i][1].textContent == "X" && colonnes[i][2].textContent == "X") {
            alert('Joueur 2 gagne');
        } else if (colonnes[i][0].textContent == "O" && colonnes[i][1].textContent == "O" && colonnes[i][2].textContent == "O") {
            alert('Joueur 2 gagne');
        }
      }
}

function checkDiagonale() {
    for (let i = 0; i < diagonales.length; i++) {
        if (diagonales[i][0].textContent == "X" && diagonales[i][1].textContent == "X" && diagonales[i][2].textContent == "X") {
            alert('Joueur 2 gagne');
        } else if (diagonales[i][0].textContent == "O" && diagonales[i][1].textContent == "O" && diagonales[i][2].textContent == "O") {
            alert('Joueur 2 gagne');
        }
      }
}

const joueurContreJoueur = document.querySelector('.joueurContreJoueur');
const joueurContreOrdi = document.querySelector('.joueurContreOrdinateur');
const joueurContreImpossible = document.querySelector('.joueurContreImmpossible');
// const modeDeJeu = [joueurContreJoueur, joueurContreOrdi, joueurContreImpossible];
// let modeActuel = modeDeJeu[0];

// function changerGameMode() {
//     for (let i = 0; i < modeDeJeu.length; i++) {
//         if (modeDeJeu[i].click) {
//             location.reload();
//             modeActuel = modeDeJeu[i];
//         }
//     }
//     console.log(modeDeJeu);
// }

joueurContreJoueur.addEventListener("click", function(){
    location.reload();
    let modeActuel = modeDeJeu[0];
});

joueurContreOrdi.addEventListener('click', function () {
    location.reload();
    modeActuel = modeDeJeu[1];

});

joueurContreImpossible.addEventListener('click', function () {
    location.reload();
    modeActuel = modeDeJeu[2];
});


function ordiPlays() {
    const caseVide = [];
    for (let i = 0; i < caseDeJeu.length; i++) {
        if (caseDeJeu == "O") {
            
        }
    }
    const index = Math.floor(Math.random() * caseVide.length);
    caseDeJeu[caseVide[index]].click();
}

