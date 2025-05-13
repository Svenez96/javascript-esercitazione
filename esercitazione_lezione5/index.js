// Dobbiamo creare una pagina dove abbiamo un paragrafo, un input email, un input password e un bottone. L'utente dovrà inserire i valori di email e password e al click il sistema deve controllare che i valori siano corretti.

// Se email le password corrispondono allora all'interno del paragrafo appare la scritta "Benvenuto, Utente" altrimenti la scritta "Credenziali errate".

// Le credenziali corrette sono:
// const state = {
//   // Altre chavi...
//   auth: {
//     email: "user@example.com",
//     password: "1234",
//   }
// }

// Se email o password non vengono inserite, al click del bottone nel paragrafo appare la scritta "Tutti i campi sono obbligatori"; 

const $form = document.querySelector("#login-form");
const $emailInput = document.querySelector("#email");
const $passwordInput = document.querySelector("#password");
const $loginBtn = document.querySelector("#login");
const $messageParagraph = document.querySelector("#message");

// 2. Dichiarazione dello state con i suoi valori di base
const state = {
    auth: {
        email: "user@example.com",
        password: "1234",
      },
    message:"Inserisci le tue credenziali"
};

// 3 Validazione dei campi
const validateInputs = () => {
  
    if ($emailInput.value === "" || $passwordInput.value === "") {
      state.message = "Tutti i campi sono obbligatori";
     } else if ($emailInput.value === state.auth.email && $passwordInput.value === state.auth.password)
        state.message = "Benvenuto, Utente"
      else {
        state.message = "Credenziali errate"
     };
  };

// 4. Rendering 
const render = () => {
    $messageParagraph.innerHTML = state.message;
    if (state.message === "Benvenuto, Utente") {
        $messageParagraph.style.color = "green";
      } else if (state.message === "Credenziali errate") {
        $messageParagraph.style.color = "red";
      } else if (state.message === "Tutti i campi sono obbligatori") {
        $messageParagraph.style.color = "orange";
      } else {
        $messageParagraph.style.color = "black";
      }
  };

// 5. Gestore degli eventi
const manageListeners = () => {
    $form.addEventListener("submit", (event) => {
      event.preventDefault(); //ho cercato sul web questa soluzione perchè si aggiornava automaticamente dopo aver fatto il submit
      validateInputs();
      render();
    });
  };

// 6. Funzione di init che permette di inizializzare il componente
const init = () => {
    render();
    manageListeners();
}

// 7. Esecuzione della funzione di init.
init();