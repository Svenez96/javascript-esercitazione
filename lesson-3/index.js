/**
 * //* Array methods
 * 
 * //* 1. [].forEach() -> (?) -> Devo eseguire un semplice loop sul mio array?
 * //* 2. [].map() -> (?) -> Devo ottenere un nuovo array esito della manipolazione (modifica dei dati interni) dell'array originale?
 * //* 3. [].filter() -> (?) -> Devo prendere da un array elementi multipli che rispettano una condizione?
 * //* 4. [].find() -> (?) -> Devo prendere un singolo elemento all'interno di un array che rispetta una condizione?
 * //* 5. [].reduce() -> (?) -> Devo effettuare un'operazione matematica sul mio array che restituisce un numero?
 * //* 6. [].sort() -> (?) -> Devo riordinare gli elementi di un array?
 * //* 7. [].push() -> (?) -> Devo aggiungere un elemento alla fine dell'array?
 * //* 8. [].join() -> (?) -> Devo concatenare tutti gli elementi di un array, eventualmente con anche l'impiego di un separatore?
 * //* 9. [].findIndex() -> (?) -> Devo ottenere l'indice nell'array di un elemento che rispetta una condizione?
 * //* 10. [].splice() -> (?) -> Devo eliminare degli elementi da un array?
 * //* 10.1            -> (?) -> Devo prendere un range di elementi all'interno di un array?
 * //* 10.2            -> (?) -> Devo rimpiazzare degli elementi all'interno di un array?
 */

const colors = ["red", "blue", "green", "yellow", "orange", "black", "white"];
const numbers = [1, 14, 5, 9, 8, 12, 45, 32, 94, 107];
const students = [
    { nome: "Alessandro", cognome: "D'Antoni", voto: 90 },
    { nome: "Nino", cognome: "Ambrogio", voto: 93 },
    { nome: "Simone", cognome: "Morabito", voto: 87 },
    { nome: "Domenico", cognome: "Mazza", voto: 92 },
    { nome: "Jorge", cognome: "Vasquez", voto: 94 },
]

//* 1. [].forEach() -> (?) -> Devo eseguire un semplice loop sul mio array?
// item -> l'elemento corrente dell'array, equivalente a colors[i];
// index -> l'indice di posizione dell'elemento corrente nell'array -> i;
// array -> reference (collegamento in memoria) dell'array originale;
colors.forEach((item, index /*, array*/) => {
    console.log("item: ", item);
    console.log("index: ", index);
    // console.log("array:", array);
});

//* 2. [].map() -> (?) -> Devo ottenere un nuovo array esito della manipolazione (modifica dei dati interni) dell'array originale?
// item -> l'elemento corrente dell'array, equivalente a colors[i];
// index -> l'indice di posizione dell'elemento corrente nell'array -> i;
// array -> reference (collegamento in memoria) dell'array originale;
// Ciò che viene restituito dalla callback di map verrà preso e pushato all'interno di un nuovo array generato da map
const newColors = colors.map((item, index /*, array*/) => {
    return `All'indice ${index} troviamo il colore ${item.toUpperCase()} in maiuscolo`;
    // if (item != "red") {
    //     return `All'indice ${index} troviamo il colore ${item.toUpperCase()} in maiuscolo`;
    // }
    // undefined
});

console.log(newColors);

//* 3. [].filter() -> (?) -> Devo prendere da un array elementi multipli che rispettano una condizione?
// item -> l'elemento corrente dell'array, equivalente a colors[i];
// index -> l'indice di posizione dell'elemento corrente nell'array -> i;
// array -> reference (collegamento in memoria) dell'array originale;
// Se la callback di filter restituisce true allora quell'item verrà preso e inserito in un nuovo array
// Se non trova nulla che restituisce true alla callback restituirà di default un array vuoto
const evens = numbers.filter((item, index /*, array*/) => {
    return item % 2 === 0; // true - false
});

console.log(evens);

//* 4. [].find() -> (?) -> Devo prendere un singolo elemento all'interno di un array che rispetta una condizione?
// item -> l'elemento corrente dell'array, equivalente a colors[i];
// index -> l'indice di posizione dell'elemento corrente nell'array -> i;
// array -> reference (collegamento in memoria) dell'array originale;
// Al primo true restituito dalla callback di find il ciclo si interrompe e viene restituito l'elemento corrente
// Se non trova nulla che restituisce true alla callback restituirà di default null
const even = numbers.find((item, index /*, array*/) => {
    return item % 2 === 0;
});

console.log(even);

//* 5. [].reduce() -> (?) -> Devo effettuare un'operazione matematica sul mio array che restituisce un numero?
// current -> l'elemento corrente dell'array, equivalente a colors[i];
// accumulator -> L'ultimo valore restituito dalla callback di reduce;
// initialValue -> Assegna il valore di partenza ad accumulator
const sum = numbers.reduce((accumulator, current) => {
    return accumulator + current;
    // 0 -> 0 + 1 = 1;
    // 1 -> 1 + 14 = 15;
    // 2 -> 15 + 5 = 20;
    // 3 -> 20 + 9 = 29
    // ...
}, 0);

console.log(sum);

// Calculate the grade average
const average = students.reduce((acc, current) => {
    return acc + current.voto;
    // // 0 -> 90 + 93 = 183;
    // // 1 -> 183.voto + 87;
    // 0 -> 0 + 90 = 90;
    // 1 -> 90 + 93 = 183;
    // 2 -> 183 + 87 = 270;
    // ...
}, 0) / students.length;

console.log(average);

//* 6. [].sort() -> (?) -> Devo riordinare gli elementi di un array?
// Se negativo -> posiziona indietro;
// Se 0 -> resta in posizione;
// Se positivo -> posioziona in avanti;
// Quando a -> b ordine crescente;
// Quando b -> a ordine descrescente;
numbers.sort((a , b) => {
    return a - b;
});

console.log(numbers);

numbers.sort((a , b) => {
    return b - a;
});

console.log(numbers);

students.sort((a , b) => {
    return a.cognome.localeCompare(b.cognome);
});

console.log(students);

students.sort((a , b) => {
    return b.cognome.localeCompare(a.cognome);
});

console.log(students);

//* 7. [].push() -> (?) -> Devo aggiungere un elemento alla fine dell'array?
// ...items -> Possiamo inserire un numero illimitato di parametri, tutti saranno aggiunti all'array
const student = {
    nome: "Giovanni",
    cognome: "Bianchi",
    voto: 100
};

students.push(student);

console.log(students);

//* 8. [].join() -> (?) -> Devo concatenare tutti gli elementi di un array, eventualmente con anche l'impiego di un separatore?
// separator -> Stringa che separa gli elementi della concatenazione
const colors_str = colors.join("");

console.log(colors_str);

//* 9. [].findIndex() -> (?) -> Devo ottenere l'indice nell'array di un elemento che rispetta una condizione?
// item -> l'elemento corrente dell'array, equivalente a colors[i];
// index -> l'indice di posizione dell'elemento corrente nell'array -> i;
// array -> reference (collegamento in memoria) dell'array originale;
// Al primo true restituito dalla callback di find il ciclo si interrompe e viene restituito l'indice dell'elemento corrente
// Se non trova nulla che restituisce true alla callback restituirà di default -1
const index = students.findIndex((item, index /*, array*/) => {
    return item.nome == "Simone";
});

console.log(index);

//* 10. [].splice() -> (?) -> Devo eliminare degli elementi da un array?
//*                       -> Devo prendere un range di elementi all'interno di un array?
// start -> Indice di partenza da cui cominciare a eliminare
// deleteCount -> Numero di elementi da eliminare a partire dall'indice
// Rimuovo gli ultimi 3 elementi dell'array
// const colors = ["red", "blue", "green", "yellow", "orange", "black", "white"];
const c = colors.splice(4, 3); // Array restituito -> ["orange", "black", "white"];

console.log(colors);
console.log(c);

/**
 * Esempio -> findIndex + splice
 * Voglio rimuovere dall'array lo studente con il nome Simone
 * 
 * @example
 * const studentIndex = students.findIndex((item) => item.nome == "Simone");
 * 
 * if (studentIndex !== -1) {
 *     students.splice(studentIndex, 1);
 * }
 */

// Metodo delle stringhe
// const col = "red-blue-green-yellow-orange-black-white".split("-");
// console.log(col)