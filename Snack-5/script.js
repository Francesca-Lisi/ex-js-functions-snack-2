// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

// Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.


let stampaOgniSecondo = setInterval(function () {
    console.log("E passato un secondo")
}, 1000)

setTimeout(function () {
    clearInterval(stampaOgniSecondo)
    console.log('Stop!')
}, 6000)