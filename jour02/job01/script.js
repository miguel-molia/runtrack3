 // on vise notre bouton 
 const bouton = document.querySelector("#button");
 
 //on définit notre variable article via un élément qui a pour id citation
 const article = document.querySelector("#citation");


function citation() {
       
       
//On va mettre notre button "sur écoute" dans le cas où on clique dessus 
bouton.addEventListener('click', () => {
        
            
//on affiche dans la console la citation sans les balises affichées grace a innerText
console.log(article.textContent);
            

            
}
)
}

//appel de la fonction pour la faire marcher
citation();
    
    


