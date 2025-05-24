//Dobbiamo costruire un componente che contiene un <h1> vuoto e un <button>. Al click sul bottone dobbiamo far si che all'interno dell'h1 si visualizzi il testo "My Custom Title":


// 1. selezione degli elementi dell'HTML
const $title = document.querySelector("#title");
const $buttonInput = document.querySelector("#input");

// 2. scriviamo lo state, la situazione di partenza
const state = {
    text: " ",
};

// 3. scriviamo la funzione aggiornata dell'elemento
const updateText = () => {
    state.text = "My Custom Title";
}

// 4. scriviamo la funzione del render, che aggiornerà l'elemento
const render = () => {
    $title.innerHTML = state.text;m
}

// 5. Scriviamo la funzione che gestisce gli event listeners
const manageListeners = () => {
    $buttonInput.addEventListener("click", () => { 
        updateText(); 
        render();
    })
}

// 6. Scriviamo la funzione init
const init = () => { 
    render();
    manageListeners();
}

// 7. Eseguimo la funzione init
init();m
