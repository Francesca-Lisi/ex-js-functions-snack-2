// Scrivi una funzione creaThrottler che accetta una funzione e un tempo limite.

// Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi.


function creaThrottler(func, time) {
    let lastTime = 0;

    return function () {
        const now = Date.now()
        if (now - lastTime >= time) {
            func()
            lastTime = now;
        }
    }
}

function stampaMessaggio() {
    console.log('Hai eseguito la funzione')

}

const eseguiThrottler = creaThrottler(stampaMessaggio, 2000)

eseguiThrottler();
eseguiThrottler();
setTimeout(eseguiThrottler, 2500)