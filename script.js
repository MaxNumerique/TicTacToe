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

console.log(caseDeJeu);

function remplirCase(caseJeu) {
  if (caseJeu.textContent == "") {
    changerJoueur();
    console.log(Joueur);
    afficherJoueurActuel();
    changerCouleur(caseJeu);
    checkLigne();
    checkColonne();
    checkDiagonale();
    // checkGagnant(caseJeu);
    // checkLigneX1();
    // checkLigneX2();
    // checkLigneX3();
    // checkLigneO1();
    // checkLigneO2();
    // checkLigneO3();
    // checkColonneX1();
    // checkColonneX2();
    // checkColonneX3();
    // checkColonneO1();
    // checkColonneO2();
    // checkColonneO3();
    // checkDiagonaleX1();
    // checkDiagonaleX2();
    // checkDiagonaleO1();
    // checkDiagonaleO2();
    console.log(tour);
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
console.log(ligne1.textContent);
const ligne2 = [caseDeJeu[3], caseDeJeu[4], caseDeJeu[5]];
const ligne3 = [caseDeJeu[6], caseDeJeu[7], caseDeJeu[8]];

const colonne1 = [caseDeJeu[0], caseDeJeu[3], caseDeJeu[6]];
const colonne2 = [caseDeJeu[1], caseDeJeu[4], caseDeJeu[7]];
const colonne3 = [caseDeJeu[2], caseDeJeu[5], caseDeJeu[8]];

const diagonale1 = [caseDeJeu[0], caseDeJeu[4], caseDeJeu[8]];
const diagonale2 = [caseDeJeu[2], caseDeJeu[4], caseDeJeu[6]];

const lignes = [ligne1, ligne2, ligne3];
console.log(lignes);

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
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function checkLigne() {
//     for (let ligne of lignes) {
//         if (lignes[ligne].textContent == "X") {
//             alert("Joueur 2 gagne")
//         } else if (lignes[ligne].textContent == "O") {
//             alert("Joueur 1 gagne")
//         }
//     }
// }

// function checkColonne() {
//     for (let colonne of colonnes) {
//         if (colonnes[colonne].textContent == "X") {
//             alert("Joueur 2 gagne")
//         } else if (colonnes[colonne].textContent == "O") {
//             alert("Joueur 1 gagne")
//         }
//     }
// }

// function checkDiagonale() {
//     for (let diagonale of diagonales) {
//         if (diagonales[diagonale].textContent == "X") {
//             alert("Joueur 2 gagne")
//         } else if (diagonales[diagonale].textContent == "O") {
//             alert("Joueur 1 gagne")
//         }
//     }
// }

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function checkLigneX1() {
//   if (
//
//   ) {
//     alert("Joueur 2 gagne");
//   }
// }
// function checkLigneX2() {
//   if (
//     caseDeJeu[3].textContent == "X" &&
//     caseDeJeu[4].textContent == "X" &&
//     caseDeJeu[5].textContent == "X"
//   ) {
//     alert("Joueur 2 gagne");
//   }
// }
// function checkLigneX3() {
//   if (
//     caseDeJeu[6].textContent == "X" &&
//     caseDeJeu[7].textContent == "X" &&
//     caseDeJeu[8].textContent == "X"
//   ) {
//     alert("Joueur 2 gagne");
//   }
// }

// function checkLigneO1() {
//   if (
//     caseDeJeu[0].textContent == "O" &&
//     caseDeJeu[1].textContent == "O" &&
//     caseDeJeu[2].textContent == "O"
//   ) {
//     alert("Joueur 1 gagne");
//   }
// }

// function checkLigneO2() {
//   if (
//     caseDeJeu[3].textContent == "O" &&
//     caseDeJeu[4].textContent == "O" &&
//     caseDeJeu[5].textContent == "O"
//   ) {
//     alert("Joueur 1 gagne");
//   }
// }
// function checkLigneO3() {
//   if (
//     caseDeJeu[6].textContent == "O" &&
//     caseDeJeu[7].textContent == "O" &&
//     caseDeJeu[8].textContent == "O"
//   ) {
//     alert("Joueur 1 gagne");
//   }
// }

// function checkColonneX1() {
//   if (
//     caseDeJeu[0].textContent == "X" &&
//     caseDeJeu[3].textContent == "X" &&
//     caseDeJeu[6].textContent == "X"
//   ) {
//     alert("Joueur 2 gagne");
//   }
// }

// function checkColonneX2() {
//   if (
//     caseDeJeu[1].textContent == "X" &&
//     caseDeJeu[4].textContent == "X" &&
//     caseDeJeu[7].textContent == "X"
//   ) {
//     alert("Joueur 2 gagne");
//   }
// }
// function checkColonneX3() {
//   if (
//     caseDeJeu[2].textContent == "X" &&
//     caseDeJeu[5].textContent == "X" &&
//     caseDeJeu[8].textContent == "X"
//   ) {
//     alert("Joueur 2 gagne");
//   }
// }

// function checkColonneO1() {
//   if (
//     caseDeJeu[0].textContent == "O" &&
//     caseDeJeu[3].textContent == "O" &&
//     caseDeJeu[6].textContent == "O"
//   ) {
//     alert("Joueur 1 gagne");
//   }
// }

// function checkColonneO2() {
//   if (
//     caseDeJeu[1].textContent == "O" &&
//     caseDeJeu[4].textContent == "O" &&
//     caseDeJeu[7].textContent == "O"
//   ) {
//     alert("Joueur 1 gagne");
//   }
// }
// function checkColonneO3() {
//   if (
//     caseDeJeu[2].textContent == "O" &&
//     caseDeJeu[5].textContent == "O" &&
//     caseDeJeu[8].textContent == "O"
//   ) {
//     alert("Joueur 1 gagne");
//   }
// }

// function checkDiagonaleX1() {
//   if (
//     caseDeJeu[0].textContent == "X" &&
//     caseDeJeu[4].textContent == "X" &&
//     caseDeJeu[8].textContent == "X"
//   ) {
//     alert("Joueur 2 gagne");
//   }
// }

// function checkDiagonaleX2() {
//   if (
//     caseDeJeu[2].textContent == "X" &&
//     caseDeJeu[4].textContent == "X" &&
//     caseDeJeu[6].textContent == "X"
//   ) {
//     alert("Joueur 2 gagne");
//   }
// }

// function checkDiagonaleO1() {
//   if (
//     caseDeJeu[0].textContent == "O" &&
//     caseDeJeu[4].textContent == "O" &&
//     caseDeJeu[8].textContent == "O"
//   ) {
//     alert("Joueur 1 gagne");
//   }
// }

// function checkDiagonaleO2() {
//   if (
//     caseDeJeu[2].textContent == "O" &&
//     caseDeJeu[4].textContent == "O" &&
//     caseDeJeu[6].textContent == "O"
//   ) {
//     alert("Joueur 1 gagne");
//   }
// }

// function verif
// const ligne = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
// const colonne = [[0, 3, 6], [1, 4, 7], [2, 5, 8]];
// const diagonale = [[0, 4, 8], [2, 4, 6]];
