//je crée les deux constantes correspondant aux id
const bouton = document.querySelector("#button");
const compteur = document.querySelector("#compteur");

//je crée ma fonction
function addone() {
  
  bouton.addEventListener("click", () => {

    //incrementer de un pour l'id compteur recuperé grace a textcontent
    compteur.textContent++;

  });
  
    
  
}
//appel de la fonction
addone();

