// JSNACK1
/* 
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando
la somma degli elementi è minore di 50.
*/

// Creiamo l'array vuoto
const maxFifty = [];
// Variabile somma che contiene la somma dei numeri
let sum = 0;

// Ciclo da eseguire finche sum è minore di 50
while(sum < 50) {
    // chiedi numero
    let userNumber = prompt('Dimmi un numero');
    // trasforma numero
    userNumber = parseInt(userNumber);

    // aggiugni il numero nella sum
    sum += userNumber

    // Pusho il numero nell'array
    maxFifty.push(userNumber);
}
// Stampa indice e i numeri inseriti dall'utente
console.log("N° Prompt eseguiti e i nuneri inseriti dall'utente", maxFifty);
