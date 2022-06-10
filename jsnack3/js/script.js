// JSNACK3
/* 
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
*/

let userNumber = 0;

let sum = 0;

/*** FOR ***/
// // chiedo per 5 volte all’utente di inserire un numero
// for (let i = 1; i <= 5; i++) {

//     userNumber = parseInt(prompt('Dimmi un numero'));
//     // somma dei numeri inseriti dall'utente tramite il prompt
//     sum += userNumber;
  
// }
// // somma di tutti i numeri inseriti
// console.log(sum);

/*** WHILE ***/

let i = 0;

// chiedo per 5 volte all’utente di inserire un numero
while (i < 5) {

    userNumber = parseInt(prompt('dimmi 5 numeri'));
    // somma dei numeri inseriti dall'utente tramite il prompt
    sum += userNumber;

    i++;
}
// somma di tutti i numeri inseriti
console.log('Somma di tutti i numeri inseriti', sum);