// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.

function somma(numA, numB) {
    const risultato = numA + numB
    console.log(risultato)
}

somma(3, 5)


// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.


const sommaAnonima = (numA, numB) => console.log(numA + numB)

sommaAnonima(6, 4)