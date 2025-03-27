// Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero.

// Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.

function contoAllaRovescia(n) {
    let contatore = n;

    let timeCounter = setInterval(function () {

        if (contatore > 0) {
            console.log(contatore)
            contatore--
        } else {
            console.log('Tempo Scaduto!')
            clearInterval(timeCounter)
        }

    }, 1000)

}

contoAllaRovescia(5)