const $divBox = document.querySelector("#box");

const content = $divBox.innerText;
console.log(content)

$divBox.innerHTML = `
    <h2>My new Title</h2>
`
/**
 * Dobbiamo creare un contatore che al clic del bottone aumenta di 1, partendo da 0
 * Il valore del contatore deve essere visibile all'interno dello span
 * 
 *  1. [X] Selezioniamo gli elementi HTML con i quali dobbiamo interagire
 *  2. [X] Trovare il modo di salvare il valore del contatore in memoria (state)
 *  3. [X] Ci servirà una funzione che incrementa il contatore di uno
 *  4. [X] Sicuramente ci servirà una funzione che aggiorna il valore del contatore dentro lo span in tempo reale (render)
 *  5. [X] Dobbiamo ascoltare l'evento clic sul bottone, in risposta al quale aumenteremo il valore del contatore e aggiorneremo lo span
 *  6. [X] Ci serve una funzione che ci permette di inizializzare il nostro algoritmo
 */

const $spanNumber = document.querySelector("#number");
const $buttonCounter = document.querySelector("#counter");

const state = {
    counter: 0,
};

const incrementByOne = () => {
    state.counter = state.counter + 1;
}

const render = () => {
    $spanNumber.innerHTML = state.counter;
}

const manageListeners = () => {
    $buttonCounter.addEventListener("click", () => { 
        incrementByOne(); 
        render();
    })
}

const init = () => {
    render(); // Il primo rendering tecnicamente si chiama mount 
    manageListeners();
}

init();