// Selezione degli elementi HTML
const $dataBody = document.querySelector("#data-body");

// Link all'API 
const API_URL = "https://jsonplaceholder.typicode.com/comments";

// Impostiamo la banca dati
const state = {
    data: []
};

// Impostiamo la funzione per il ricevimento dei dati e l'avviso di errore in caso di mancata ricezione degli stessi
const fetchData = async () => {
    try { 
        const response = await fetch(API_URL, {
            method: "GET"
        })
    
     if (response.ok){
            state.data = await response.json();
        } else {
            throw new Error("Internal server error")
        }
        
    } catch (error) {
        console.log(error)
    }
};

// Generiamo l'HTML nello state, poi convertiamo i dati in stringa e successivamente li inseriamo nel tbody 
const render = () => {
    const HTML = state.data.map((item) => {
        return `
            <tr>
                <td>${item.postId}</td>    
                <td>${item.id}</td>    
                <td>${item.name}</td>    
                <td>${item.email}</td>    
                <td>${item.body}</td>    
            </tr>
        `   
    }).join("");

    $dataBody.innerHTML = HTML
}

// Impostiamo la funzione di inizializzazione
const init = async () => {
    await fetchData();
    render();
}

// Inizializziamo la funzione
init()