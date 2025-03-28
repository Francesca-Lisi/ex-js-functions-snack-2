// Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.

// Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.

const operazioni = [
    function () { console.log("Step 1"); },
    function () { console.log("Step 2"); },
    function () { console.log("Step 3"); }
];

function sequenzaOperazioni(operazioni, intervallo) {
    let i = 0

    function eseguiOperazioni() {
        if (i <= operazioni.length) {
            operazioni[i]();
            i++;
            setTimeout(eseguiOperazioni, intervallo);
        }
    }

    eseguiOperazioni()
}

sequenzaOperazioni(operazioni, 3000)