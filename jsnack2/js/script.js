// JSNACK2
/* 
Calcola la somma e la media dei primi 10 numeri.
*/

// variabile per specificare i 10 numeri
let numSum = 0;

for(let i = 1; i <= 10; i++) {
    // eseguo la somma
    numSum += i;
}

// stampa in console il risultato della somma
console.log('Risultato Somma', numSum);
// eseguo la media della somma dei 10 numeri
let mediaSum = numSum / 10;
// stampo in console la media del risultato della somma
console.log('Risultato finale - Media della somma', mediaSum);