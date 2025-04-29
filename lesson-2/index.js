/**
 * Concatenazione
 */
const first_name = "Alessandro";
const last_name = "D'Antoni";

const text = "Ciao, " + first_name + " " + last_name; // Classico ma poco usato
const message = `Ciao, ${first_name} ${last_name}`; // Moderno, consigliato

console.log(text);
console.log(message);

/**
 * Operazioni matematiche
 */
const num1 = 1;
const num2 = "3a"; // -> 3

const result = num1 * num2;

console.log(isNaN(num2));

const number = 4;

const is_odd = number % 2 != 0; // true (dispari) | false (pari)
const is_even = number % 2 == 0; // true (pari) | false (dispari)

// Math -> Ci consente di effettuare diverse operazioni matematiche con metodi già pronti

/**
 * Condizioni
 * if - else if - else
 */
const role = "1";
// == -> Controllo solo sul valore
// === -> Controllo sia sul valore che sul tipo di dato
if (role === 1) { // true
    console.log("L'utente è autorizzato")
} else { // false
    console.log("L'untente non è autorizzato")
}

const color = "red";
// Condizioni multiple
if (color == "yellow") { // false
    console.log("Il tuo colore è giallo");
} else if (color == "blue") { // false
    console.log("Il tuo colore è blu");
} else if (color == "green") { // false
    console.log("Il tuo colore è verde");
} else {
    console.log(`Il tuo colore è ${color}`);
}

// Switch case
switch(color) {
    case "yellow":
        console.log("Il tuo colore è giallo");
        break;
    case "blue":
        console.log("Il tuo colore è blu");
        break;
    case "green":
        console.log("Il tuo colore è verde");
        break;
    default:
        console.log(`Il tuo colore è ${color}`);
        break;
}

// Mapping
const map = {
    yellow: "Il tuo colore è giallo", // true
    blue: "Il tuo colore è blu", // true
    green: "Il tuo colore è verde", // true
    // red -> undefined -> false
}

// Operatore ternario
// variabile = condizione ? valore_se_true : valore_se_false;
const result1 = map[color] ? map[color] : `Il tuo colore è ${color}`;

console.log(result1);

/**
 * Operatori logici
 */
if ("admin" == "admin") {} // Check solo del valore -> uguale a
if (1 === "1") {} // Check del valore e del tipo di dato -> uguale a
if ("admin" != "admin") {} // Check solo del valore -> diverso da
if (1 !== "1") {} // Check del valore e del tipo di dato -> diverso da
if (2 > 3) {}
if (2 < 3) {}
if (2 <= 3) {}
if (2 >= 3) {}

const age = 20;

if (age >= 20 && age <= 65) {} // Solo se entrambe le condizioni sono vere l'if verrà eseguito
if (age <= 20 || age >= 65) {} // Anche se solo una delle condizioni è vera l'if verrà eseguito

if ((age >= 20) && (age <= 65 || age <= 20 || age >= 65)) {}
if ((age >= 20 && age <= 65) || (age <= 20 || age >= 65)) {}

/**
 * Funzioni
*/

// Dichiarando -> Esplicita
function sum(a, b) { // Parametri
    const result = a + b;
    console.log(result);
}; 

// Dichiarando -> Arrow function
const multiply = (a, b) => {
    const result = a * b;
    console.log(result);
}

// Dichiarando -> Arrow function
const isEven = (num) => {
    // Voglio che restituisca true se è pari o false se è dispari
    return num % 2 == 0;
}

// Esecuzione
sum(4, 6); // -> Eseguendo
multiply(7, 3); // -> Eseguendo

// Reference
sum; // -> Non stiamo eseguendo ma prendiamo solo la reference
multiply; // -> Non stiamo eseguendo ma prendiamo solo la reference

const fn = sum; // Prendo solo la reference e la salvo in una nuova costante

// Eseguibile
fn(5, 7);

const is_even_num = isEven(2);

// La funzione non restituisce niente quindi se provo a venere cosa restituisce avrò undefined
const evenFeedback = (number_to_check) => {
    if (isEven(number_to_check)) {
        console.log(`${number_to_check} è pari`);
    } else {
        console.log(`${number_to_check} è dispari`);
    }
}

const r = evenFeedback(135);
console.log(r); // undefined

/**
 * Loop/cicli -> for
 */
let counter = 0;

// Voglio incrementare questo contatore di un numero alla volta fino a 10
for(let i = 1; i < 10; i++) { // i++ -> i = i + 1; && i += 1 -> i = i + 1;
    counter = counter + (i * 2);
    // counter++; // restituisce il valore incrementato
    // counter += 1; // Modifica in place
    // console.log("i: ", i);
    // console.log("Counter: ", counter);
}

// console.log("Fine: ", counter);

const numbers = [1, 3, 4, 7, 8, 11]; // length -> 6

for(let i = 0; i < numbers.length; i++) { // 6 < 6 -> false -> stop
    console.log(numbers[i]); 
    // 0 -> 1
    // 1 -> 3
    // 2 -> 5
    // 3 -> 7
    // 4 -> 9
    // 5 -> 11
    // 6 -> stop;
    // numbers[i] = numbers[i] * i;
    numbers[i] = numbers[i] % 2 == 0 ? `${numbers[i]} è pari` : `${numbers[i]} è dispari`; // pari -> true || dispari -> false
}

console.log(numbers);