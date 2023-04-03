// je selectionne dans le document l'id button
const bouton = document.querySelector('#button');

const citation = document.querySelector('#citation');


// je crée une fonction 
function showhide() {
    


//je crée un evenement click sur la variable bouton
     bouton.addEventListener('click' ,() => {
        

        //si dans la feuille de style le display est egal a block
        if(citation.style.display == 'block'){

            //tu me le passe en none (affiche pas)
            citation.style.display = 'none';

        }
        
        else {
            //sinon tu me l'affiche
            citation.style.display = 'block';

        }
        console.log(citation.textcontent);
        
}
)   
}
//appel de la fonction 
showhide();