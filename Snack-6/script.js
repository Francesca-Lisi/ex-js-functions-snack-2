// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.



function creaContatoreAutomatico(time) {

    let contatore = 0;

    return () => {
        setInterval(() => {
            contatore++;
            console.log(contatore)
        }, time)
    }
}

const usaContatore = creaContatoreAutomatico(1000)

usaContatore()