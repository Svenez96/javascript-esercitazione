// 1. Selezione degli elementi HTML con i quali interagire
const $operationSelect = document.querySelector("#operation");
const $numberInput = document.querySelector("#number");
const $clearBtn = document.querySelector("#clear");
const $calculateBtn = document.querySelector("#calculate");
const $resultSpan = document.querySelector("#result");

// 2. Dichiarazione dello state con i suoi valori di base
const state = {
    result: 0,
    operation: "SUM",
    base: 1,
};

// 3. Funzioni che permettono all'algoritmo di svolgere il compito

// 3.1 Mappa delle operazioni disponibili
const operationsMap = {
    SUM: () => state.result = state.result + state.base,
    SUB: () => state.result = state.result - state.base,
    MUL: () => state.result = state.result * state.base,
    DIV: () => state.result = state.result / state.base,
}

// 3.2 Esecuzione dell'operazione selezionata in base al valore nello state
const calculate = () => {
    operationsMap[state.operation]();
}

// 3.3 Clear di tutte le impostazioni, partendo dallo state per poi resettare i valori di input e select
const clearAll = () => {
    state.result = 0;
    state.operation = "SUM";
    state.base = 1;

    $operationSelect.value = state.operation;
    $numberInput.value = state.base;
}

// 4. Funzione di rendering
const render = () => {
    $resultSpan.innerHTML = state.result;
}

// 5. Gestore degli eventi
const manageListeners = () => {
    // 5.1 Selezione dell'operazione tramite select
    $operationSelect.addEventListener("change", (event) => {
        state.operation = event.target.value;
    });

    // 5.2 Set del numero di base per effettuare i calcoli
    $numberInput.addEventListener("input", (event) => {
        state.base = Number(event.target.value);
    });

    // 5.3 Click sul bottone per l'esecuzione del calcolo con relativo controllo per bloccare eventuali divizioni per 0
    $calculateBtn.addEventListener("click", () => {
        if ((state.result == 0 || state.base == 0) && state.operation == "DIV") {
            console.error("You cant divide by zero");
            return;
        }

        calculate();
        render();
    });

    // 5.4 Click sul bottone per resettare valori e input/select alle impostazioni di default
    $clearBtn.addEventListener("click", () => {
        clearAll();
        render();
    });
}

// 6. Funzione di init che permette di inizializzare il componente
const init = () => {
    render();
    manageListeners();
}

// 7. Esecuzione della funzione di init.
init();