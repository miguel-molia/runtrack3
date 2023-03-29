function afficherJoursSemaines() {
    
    //tableau qui contient l’ensemble des jours de la semaine
    let joursSemaines = [
        "Lundi", "Mardi", "Mercredi", "Jeudi",
        "Vendredi", "Samedi", "Dimanche"
    ];

    //condition pour afficher tous les jours avec une boucle for
    for(let i = 0;  i < 7;  i++) {
        console.log(joursSemaines[i]);
    }
}

//appel de la fonction pour l'afficher
afficherJoursSemaines();