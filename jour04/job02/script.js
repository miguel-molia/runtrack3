// const json = "http://localhost:81/runtrack3/jour04/job02/json.php";
const json = {
  name: "La Plateforme_",
  address: "8 rue d'hozier",
  city: "Marseille",
  nb_staff: "11",
  creation:"2019"
  }



  function jsonValueKey(key,json){

 
    fetch("json").then(response => response.json())
   
    //le deuxieme then nous recupere toutes les données relatives a notre mpromesse fetch
     .then(data => { console.log(data.name)
     })
 
     //gestion d'erreur dans le cas ou ma promesse a comme etat rejected
 


  }

  jsonValueKey('exemple',json)

