// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

function creaTimer(time) {
    setTimeout(() => console.log('Tempo Scaduto!'), time)
}

creaTimer(3000)