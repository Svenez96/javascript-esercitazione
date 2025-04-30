/**
 * ESERCIZIO 1: CONCATENAZIONE STRINGHE
 * 
 * Crea una funzione 'createGreeting' che accetta tre parametri:
 * - saluto (es. "Buongiorno", "Ciao", ecc.)
 * - nome
 * - titolo (es. "Sig.", "Dott.", "Prof.", ecc.)
 * 
 * La funzione deve restituire due saluti:
 * 1. Usando la concatenazione classica (+)
 * 2. Usando i template literals (``)
 * 
 * Esempio: createGreeting("Ciao", "Marco", "Dott.") 
 * Output: ["Ciao, Dott. Marco", "Ciao, Dott. Marco"]
 */

function createGreeting(saluto, nome, titolo) {
    const classic = saluto + ", " + titolo + " " + nome;
    const literals = `${saluto}, ${titolo} ${nome}`;
    return [classic, literals];
}

console.log(createGreeting("Buongiorno", "Roberto", "Sig."));

    // Restituisci un array con entrambe le versioni del saluto
    
    
/**
 * ESERCIZIO 2: OPERAZIONI MATEMATICHE E CONTROLLO PARI/DISPARI
 * 
 * Crea una funzione 'mathOperations' che accetta due numeri come parametri
 * e restituisce un oggetto con le seguenti proprietà:
 * - somma: la somma dei due numeri
 * - prodotto: il prodotto dei due numeri
 * - differenza: la differenza tra il primo e il secondo numero
 * - divisione: la divisione del primo numero per il secondo (attenzione alle divisioni per zero!)
 * - isEven: un boolean che indica se la somma è pari
 * 
 * Esempio: mathOperations(10, 5)
 * Output: { somma: 15, prodotto: 50, differenza: 5, divisione: 2, isEven: false }
 */

function mathOperations(num1, num2) {
    const sum = num1 + num2;
    const mult = num1 * num2;
    const diff = num1 - num2;
    const div = num1 / num2;
    const isEven = sum %2 == 0;
    const object = {
        sum,
        mult,
        diff,
        div,
        isEven
    }
    return object
}

console.log(mathOperations(1, 2))

/**
 * ESERCIZIO 3: CATEGORIE DI ETÀ CON IF-ELSE
 * 
 * Crea una funzione 'categorizeAge' che accetta l'età come parametro
 * e restituisce una stringa che rappresenta la categoria di età:
 * - "Bambino" se l'età è minore di 13
 * - "Adolescente" se l'età è tra 13 e 19 (inclusi)
 * - "Adulto" se l'età è tra 20 e 64 (inclusi)
 * - "Anziano" se l'età è 65 o superiore
 * 
 * Esempio: categorizeAge(25)
 * Output: "Adulto"
 */

function categorizeAge(age) {
    if (age < 13) {
        return "Bambino"
        
    } else if (age >= 13 && age <= 19) {
        return "Adolescente"
    }
    else if (age >= 20 && age <= 64) {
        return "Adulto"
    }
    else  {
        return "Anziano"
    }
}

console.log(categorizeAge(68))

/**
 * ESERCIZIO 4: SWITCH CASE PER GIORNI DELLA SETTIMANA
 * 
 * Crea una funzione 'getDayType' che accetta un numero da 1 a 7 che rappresenta
 * un giorno della settimana (1 = Lunedì, 7 = Domenica)
 * e restituisce "Giorno lavorativo" per i giorni 1-5 e "Weekend" per 6 e 7.
 * 
 * Utilizza uno switch case per implementare questa funzione.
 * Se il numero è fuori dal range 1-7, restituisci "Giorno non valido".
 * 
 * Esempio: getDayType(6)
 * Output: "Weekend"
 */

function getDayType(day) {
    switch (day) {
        case 1: "lunedì"
        case 2: "Martedì"
        case 3: "Mercoledì"
        case 4: "Giovedì"  
        case 5: "Venerdì" 
        return("Giorno lavorativo");
        case 6: "Sabato" 
        case 7: "Domenica"   
        return("Weekend");
        default:
            return("Giorno non valido");
    }
}

console.log(getDayType(3))

/**
 * ESERCIZIO 5: MAPPING DI OGGETTI PER TRADUZIONE
 * 
 * Crea una funzione 'translateColor' che traduce i colori dall'inglese all'italiano
 * utilizzando un oggetto di mapping. La funzione deve accettare un colore in inglese
 * e restituire la sua traduzione in italiano.
 * 
 * Considera almeno questi colori: red, blue, green, yellow, black, white, purple
 * 
 * Se il colore non è presente nel mapping, restituisci "Colore non trovato".
 * 
 * Esempio: translateColor("red")
 * Output: "rosso"
 */

function translateColor(englishColor) {
    const map = {
        red: "rosso",
        blue: "blu",
        green: "verde",
        yellow: "giallo",
        black: "nero",
        white: "bianco",
        purple: "viola"
    }
   
    return map[englishColor] || "colore non trovato";
}

console.log(translateColor("rosso"))



/**
 * ESERCIZIO 6: VERIFICA RANGE CON OPERATORI LOGICI
 * 
 * Crea una funzione 'isInRange' che verifica se un numero è compreso
 * in un determinato intervallo. La funzione accetta tre parametri:
 * - number: il numero da verificare
 * - min: il limite inferiore dell'intervallo (incluso)
 * - max: il limite superiore dell'intervallo (incluso)
 * 
 * La funzione deve restituire:
 * - true se il numero è compreso nell'intervallo [min, max]
 * - false se il numero è fuori dall'intervallo
 * 
 * Crea anche una seconda funzione 'isOutOfRange' che restituisca true
 * quando il numero è FUORI dall'intervallo (utilizzando l'operatore OR).
 * 
 * Esempio: isInRange(15, 10, 20)
 * Output: true
 */

function isInRange(number, min, max) {
    return number >= min && number <= max;
}

function isOutOfRange(number, min, max) {
    return number < min || number > max;
}

console.log(isInRange(15, 10, 20));
console.log(isOutOfRange(40, 10, 20));


/**
 * ESERCIZIO 7: FUNZIONI CON RETURN E COMPOSIZIONE
 * 
 * Crea le seguenti funzioni:
 * - 'double': che accetta un numero e restituisce il doppio
 * - 'square': che accetta un numero e restituisce il quadrato
 * - 'doubleAndSquare': che accetta un numero, lo raddoppia e ne calcola il quadrato
 *   utilizzando le funzioni precedenti
 * 
 * Esempio: doubleAndSquare(3)
 * Output: 36 (3 -> 6 -> 36)
 */

function double(num) {
    return num * 2  
}
 console.log(double(3))

function square(num) {
    return num * num
}
 console.log(square(3))

function doubleAndSquare(num) {
    return square(double(num))
}

 console.log(doubleAndSquare(5))

/**
 * ESERCIZIO 8: MANIPOLAZIONE ARRAY CON CICLO FOR
 * 
 * Crea una funzione 'processArray' che accetta un array di numeri
 * e restituisce un nuovo array dove ogni elemento è trasformato secondo queste regole:
 * - Se il numero è pari, moltiplicalo per 2
 * - Se il numero è dispari, sommaci 1
 * 
 * Utilizza un ciclo for per processare l'array.
 * 
 * Esempio: processArray([1, 2, 3, 4, 5])
 * Output: [2, 4, 4, 8, 6]
 */

function processArray (numbers){

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        numbers[i] = numbers[i] * 2;
    }
      else {
        numbers[i] = numbers[i] + 1;
    }
}
     return numbers
}

console.log (processArray([1, 2, 3, 4, 5]))

/**
 * CIZIO 9: FILTRO ARRAY CON CONDIZIONI
 * 
 * Crea una funzione 'filterNumbers' che accetta un array di numeri e due parametri:
 * - min: valore minimo (incluso)
 * - max: valore massimo (incluso)
 * 
 * La funzione deve restituire un nuovo array contenente solo i numeri
 * compresi tra min e max (inclusi).
 * 
 * Esempio: filterNumbers([5, 10, 15, 20, 25], 10, 20)
 * Output: [10, 15, 20]
 */

function filterNumbers(numbers, min, max) {
    // Implementa qui la funzione usando un ciclo for e condizioni
}

/**
 * ESERCIZIO 10: ESERCIZIO COMBINATO - GESTIONE STUDENTI
 * 
 * Crea un sistema per gestire un elenco di studenti e i loro voti.
 * 
 * 1. Crea una funzione 'createStudent' che accetta nome, cognome e voto
 *    e restituisce un oggetto studente
 * 
 * 2. Crea una funzione 'addStudent' che aggiunge uno studente all'array degli studenti
 * 
 * 3. Crea una funzione 'getAverageGrade' che calcola la media dei voti
 * 
 * 4. Crea una funzione 'getTopStudent' che trova lo studente con il voto più alto
 * 
 * 5. Crea una funzione 'getStudentsByGrade' che filtra gli studenti con voto >= di una soglia
 * 
 * Esempio di utilizzo:
 * 
 * const studenti = [];
 * addStudent(studenti, "Mario", "Rossi", 85);
 * addStudent(studenti, "Luigi", "Verdi", 90);
 * addStudent(studenti, "Anna", "Bianchi", 78);
 * 
 * console.log(getAverageGrade(studenti)); // Output: 84.33
 * console.log(getTopStudent(studenti)); // Output: { nome: "Luigi", cognome: "Verdi", voto: 90 }
 * console.log(getStudentsByGrade(studenti, 80)); // Output: [{ nome: "Mario", ... }, { nome: "Luigi", ... }]
 */

// Implementa qui tutte le funzioni richieste
function createStudent(nome, cognome, voto) {
    // Crea e restituisci un oggetto studente
}

function addStudent(studenti, nome, cognome, voto) {
    // Aggiungi uno studente all'array
}

function getAverageGrade(studenti) {
    // Calcola la media dei voti
}

function getTopStudent(studenti) {
    // Trova lo studente con il voto più alto
}

function getStudentsByGrade(studenti, minGrade) {
    // Filtra gli studenti con voto >= minGrade
}

/**
 * === BONUS: Test degli esercizi ===
 * 
 * Decommentando questo codice è possibile verificare il funzionamento
 * delle funzioni implementate.
 */

/*
// Test Esercizio 1
console.log("=== Esercizio 1: Concatenazione Stringhe ===");
console.log(createGreeting("Ciao", "Marco", "Dott."));

// Test Esercizio 2
console.log("=== Esercizio 2: Operazioni Matematiche ===");
console.log(mathOperations(10, 5));

// Test Esercizio 3
console.log("=== Esercizio 3: Categorie di Età ===");
console.log(categorizeAge(8), categorizeAge(15), categorizeAge(35), categorizeAge(70));

// Test Esercizio 4
console.log("=== Esercizio 4: Switch Case Giorni ===");
console.log(getDayType(1), getDayType(6), getDayType(8));

// Test Esercizio 5
console.log("=== Esercizio 5: Mapping Colori ===");
console.log(translateColor("red"), translateColor("purple"), translateColor("orange"));

// Test Esercizio 6
console.log("=== Esercizio 6: Verifica Range ===");
console.log(isInRange(15, 10, 20), isInRange(5, 10, 20));
console.log(isOutOfRange(15, 10, 20), isOutOfRange(5, 10, 20));

// Test Esercizio 7
console.log("=== Esercizio 7: Funzioni Composte ===");
console.log(double(4), square(3), doubleAndSquare(3));

// Test Esercizio 8
console.log("=== Esercizio 8: Manipolazione Array ===");
console.log(processArray([1, 2, 3, 4, 5]));

// Test Esercizio 9
console.log("=== Esercizio 9: Filtro Array ===");
console.log(filterNumbers([5, 10, 15, 20, 25], 10, 20));

// Test Esercizio 10
console.log("=== Esercizio 10: Gestione Studenti ===");
const studenti = [];
addStudent(studenti, "Mario", "Rossi", 85);
addStudent(studenti, "Luigi", "Verdi", 90);
addStudent(studenti, "Anna", "Bianchi", 78);
console.log(studenti);
console.log("Media voti:", getAverageGrade(studenti));
console.log("Studente migliore:", getTopStudent(studenti));
console.log("Studenti con voto >= 80:", getStudentsByGrade(studenti, 80));
*/