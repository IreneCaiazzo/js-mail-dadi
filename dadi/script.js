// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


const numUser = Math.floor((Math.random() * 6) + 1);
document.getElementById('numUser').innerHTML = numUser;
const numComp = Math.floor((Math.random() * 6) + 1);
document.getElementById('numComp').innerHTML = numComp;

if (numUser < numComp){
    document.getElementById('results').innerHTML = "Ritenta";
}
else if (numUser > numComp){
    document.getElementById('results').innerHTML = "Hai vinto!";
}
else{
    document.getElementById('results').innerHTML = "Pareggio";
}