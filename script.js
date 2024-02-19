const caseDeJeu = document.querySelector('.case');
const TerrainDeJeu = document.querySelector('.gameboard');
console.log(caseDeJeu);

caseDeJeu.addEventListener("click",function(){
    caseDeJeu.innerHTML = "X";
})



for (const div of gameboard) {
    caseDeJeu.addEventListener("click", function(){
        caseDeJeu.innerHTML = "X";
    })
}