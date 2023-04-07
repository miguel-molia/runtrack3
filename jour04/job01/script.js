let bouton = document.querySelector('#button');


bouton.addEventListener('click', () => {

    //recupere le contenu de mon fichier expression.txt, le then renvoi un objet promesse sous format txt ou json
    fetch("expression.txt")
    
    .then((response) => response.text())
   
   //le deuxieme then nous recupere toutes les données relatives a notre mpromesse fetch
    .then(data => {
        
       
     //je crée une variable qui crée un element p vide  
        let p = document.createElement('p');
        
      //  dans la balise p je rajoute la data (correspond au texte)
        p.innerText = data;
        
     // j'ajoute au dom dans le body l'element p  
        document.body.append(p);

    })

    //gestion d'erreur dans le cas ou ma promesse a comme etat rejected
    .catch(err => console.log(err));


})