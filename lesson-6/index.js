// 1. Selezioniamo gli elementi HTML con cui interagire
// Dovendo renderizzare dentro una tabella ci servirà selezionare solo il tbody  
const $dataTable = document.querySelector("#data-table");

// 2. Impostiamo una costante di configurazione 
// Link all'API che risponde alla chiamata get con i dati che ci servono
const API_URL = "https://jsonplaceholder.typicode.com/posts";

// 3. Settiamo la nostra base dati (state)
// Ci servirà solo la chiave data dove salveremo i dati che provengono dall'API
const state = {
    data: []
}

// 4. Scriviamo le funzioni per il nostro algoritmo
// Funzione che ci permette di effettuare la richiesta al server e ottenere i dati da salvare nello state
const fetchData = async () => {
    try {
        const response = await fetch(API_URL, {
            method: "GET"
        });

        if (response.ok){
            state.data = await response.json();
        } else {
            throw new Error("Internal server error")
        }
    } catch (error) {
        console.log(error)
    }
}

// 5. Funzione di rendering
// Prima di tutto generiamo l'HTML a partire da i dati nello state
// Usando map e join convertiamo l'array di oggetti nella stringa che contiene l'HTML da inserire in pagina
// Inseriamo all'interno del tbody l'HTML generato
const render = () => {
    const HTML = state.data.map((item) => {
        return `
            <tr>
                <td>${item.userId}</td>
                <td>${item.id}</td>
                <td>${item.title}</td>
                <td>${item.body}</td>
            </tr>
        `
    }).join("");

    $dataTable.innerHTML = HTML
}

// 6. Funzione di inizializzazione
// Ci permette di eseguire le funzioni nel modo corretto
// Prima il fetch dei dati per salvarli nello state e solo dopo il rendering dei dati sempre dallo state
const init = async () => {
    await fetchData();
    render();
}

// 7. Eseguo init
init()