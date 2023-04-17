// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


const numUser = parseInt(prompt('scegli un numero intero da 1 a 6'));
console.log('il nummero che hai scelto è:' + numUser);
const numComp = Math.floor((Math.random() * 6) + 1);
console.log('il numero che ha generato il computer è:' + numComp);

if (numUser < numComp){
    alert ('il nummero maggiore è:' + numComp);
    
}else if (numUser > numComp){
    alert ('il numero maggiore è:' + numUser); 
}else{
    alert ('i due numeri sono uguali')
}