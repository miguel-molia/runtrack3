let mDate = new Date("04/21/2020");



jour = mDate.getDate();
weekday =mDate.getDay() ;
mois = mDate.getMonth();
annee = mDate.getFullYear();



let jourSemaine = [
  "dimanche",
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
];


let month = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "aout",
  "septembre",
  "octobre",
  "novembre",
  "decembre",
];

function jourtravaille(mDate) {
  if (
    (jour == 1 && mois == 0 && annee == 2020) ||
    (jour == 13 && mois == 3 && annee == 2020) ||
    (jour == 1 && mois == 4 && annee == 2020) ||
    (jour == 8 && mois == 4 && annee == 2020) ||
    (jour == 21 && mois == 4 && annee == 2020) ||
    (jour == 1 && mois == 5 && annee == 2020) ||
    (jour == 14 && mois == 6 && annee == 2020) ||
    (jour == 15 && mois == 7 && annee == 2020) ||
    (jour == 1 && mois == 10 && annee == 2020) ||
    (jour == 11 && mois == 10 && annee == 2020) ||
    (jour == 25 && mois == 11 && annee == 2020)
  ) {
    console.log(`Le ${jourSemaine[weekday]} ${jour} ${month[mois]} ${annee} est un jour férié`);
  } 
  
  else if (weekday == 6 || weekday == 0) {
    
  console.log(`Non, ${jourSemaine[weekday]} ${jour} ${month[mois]} ${annee} est un Week-end`);
  } 
  
  else {
    console.log(`Oui, ${jourSemaine[weekday]} ${jour} ${month[mois]} ${annee} est un jour travaillé`);
  }
}

jourtravaille(mDate);

