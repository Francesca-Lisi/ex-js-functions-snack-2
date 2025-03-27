// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop.

// Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.


function eseguiFerma(messaggio, start, stop) {

    setTimeout(function () {
        let intervallo = setInterval(function () {
            console.log(messaggio)
        }, 1000)

        setTimeout(function () {
            clearInterval(intervallo)
            console.log('Stop!')
        }, stop)

    }, start)

}

eseguiFerma('un secondo è passato', 3000, 10000)