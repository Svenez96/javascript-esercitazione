// 1. Variabili e Operatori

const a = 10;
const b = 20;

let sum = a + b;
console.log(sum);

let sub = a - b;
console.log(sub);

let mult = a * b;
console.log(mult);

let div = a / b;
console.log(div);


// 2. Condizioni (if/else)

function controllaNumero(numero){
    if (numero > 0){
        return "Positivo"
    } else if (numero < 0){
        return "Negativo"
    } else {
        return "Zero"
    }
};

console.log(controllaNumero(5))
console.log(controllaNumero(-6))
console.log(controllaNumero(0))


// 3. Ciclo for

let num = [];

for (let i = 1; i <= 10; i++) {
    num.push(i);    
};

console.log(num)


// 4. Array base

const frutti = ["mela", "banana", "arancia"];

frutti.push("kiwi");

frutti.splice(0, 1);

console.log(frutti);


// 5. Funzioni


function saluta(nome){
    console.log ("Ciao" + " " + nome + "!")
}

saluta("Andonio");


// 6. Ciclo while

let i = 5;

while(i >= 1){
    console.log(i);
    i--;
};


// 7. Funzione con return

function doppio(x){
    return x * 2;
}

console.log(doppio(4))


// 8. Oggetti base

const persona = {
    nome: "Marco",
    età: 30,
    professione: "Sviluppatore"
}

console.log("Ciao, mi chiamo " + persona.nome + ", " + "ho " + persona.età + " anni e sono uno " + persona.professione);
console.log (`Ciao, mi chiamo ${persona.nome}, ho ${persona.età} anni e sono uno ${persona.professione}.`)


// 9. Controllo con switch

function giornoSettimana(numero){
    switch (numero) {
        case 1:
            return "Lunedì"
            break;
        case 2:
            return "Martedì"
            break;
        case 3:
            return "Mercoledì"
            break;
        case 4:
            return "Giovedì"
            break;
        case 5:
            return "Venerdì"
            break;
        case 6:
            return "Sabato"
            break;
        case 7:
            return "Domenica"
            break;
    
        default:
            return "Giorno non valido"
            break;
    }
}

console.log(giornoSettimana(1))
console.log(giornoSettimana(2))
console.log(giornoSettimana(3))
console.log(giornoSettimana(4))
console.log(giornoSettimana(5))
console.log(giornoSettimana(6))
console.log(giornoSettimana(7))
console.log(giornoSettimana(8))


// .10 Contare elementi in un array

function contaPari(array){
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] %2 === 0) {
            count++
        }
    }

    return count
}

console.log(contaPari([2,4,5,7,12,33,66]))
