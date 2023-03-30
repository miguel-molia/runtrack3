function citation() {
        // on vise notre bouton 
        let bouton = document.querySelector("#button");
        
        //On va mettre notre button "sur écoute" dans le cas où on clique dessus 
        bouton.addEventListener('click', function() {
        //on définit notre variable article via un élément qui a pour id citation
            let article = document.querySelector("#citation");
            //on affiche dans la console la citation sans les balises affichées grace a innerText
            console.log(article.innerText)
            

            // console.log('on a cliqué sur le bouton');
        })
    
    }
    citation();
    
    


