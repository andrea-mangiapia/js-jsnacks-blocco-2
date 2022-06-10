// JSNACK4
/* 
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.
*/

// array con tanti elementi
let longArray = [4, 8, 15, 16, 23, 42];
// array con meno elementi
let shortArray = [2, 11, 74];

// quando longArray ha più elementi di shortArray
while (longArray.length > shortArray.length) {
    // aggiungi un numero random da 1 a 100 a shortArray
    shortArray.push(Math.floor(Math.random() * 100) + 1);
}
  
// stampa in console
console.log('Array con più elementi', longArray);
console.log('Array con meno elementi', shortArray);