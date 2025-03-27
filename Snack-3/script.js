// Crea una funzione eseguiOperazione

// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.
function somma(numA, numB) {
    console.log(numA + numB)
}


function eseguiOperazione(numA, numB, callback) {
    callback(numA, numB)
}

eseguiOperazione(10, 6, somma)