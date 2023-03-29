function bissextile(année) {

//l'année est divisible par 4 et pas par 100, ou par 400
if(année % 4 == 0 && année % 100 != 0 || année % 400 == 0) {
    return true;
}

else {
    return false;
}

}

console.log(bissextile(2023));
console.log(bissextile(2020));
console.log(bissextile(1600));