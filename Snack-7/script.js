// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop.

// Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.


function eseguiFerma(messaggio, start, stop) {


    let intervallo = setInterval(function () {
        console.log(messaggio)
    }, start)

    setTimeout(function () {
        clearInterval(intervallo)
        console.log('Stop!')
    }, stop)


}

eseguiFerma('un secondo è passato', 1000, 5000)