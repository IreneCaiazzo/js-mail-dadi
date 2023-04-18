// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const arrEmails = [ "mario.rossi@mail.com", "bruno.bianchi@mail.com", "lisa.monna@mail.com", "jeeg.robot@mail.com"];

const emailUser = prompt ('qual è la tua email?');

// flag

let isFound = false;

//ricerca della mail all'interno dell'array

for (let i = 0; i < arrEmails.length && !false; i++) {
	console.log(arrEmails[i]);
	const emailFromArray = arrEmails[i];
	if (emailUser == emailFromArray) {
		isFound = true;
	}
}

// output

if (isFound == true) {
	console.log('email trovata')
} else {
	console.log('email non trovata')
}

//N.B. aggiungere interfaccia input/output