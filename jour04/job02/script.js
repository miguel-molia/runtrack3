const json = "http://localhost:81/runtrack3/jour04/job02/json";




  function jsonValueKey(cle,json){

 
    fetch(json).then(response => response.json())
   
    //le deuxieme then nous recupere toutes les données relatives a notre mpromesse fetch
     .then(data => { 
          //je crée une variable qui crée un element p vide  
      let p = document.createElement('p');
      
            //  dans la balise p je rajoute la data (correspond au texte)

        p.innerText = data[cle];

      
   // j'ajoute au dom dans le body l'element p  
      document.body.append(p);


     })
 
     //gestion d'erreur dans le cas ou ma promesse a comme etat rejected
 


  }

  jsonValueKey('name',json)

