function CiselneTlacitko(props) {

    let puvodniCislo = props.puvodniCislo;
    let cisloTlacitka = props.cislo
    let vysledek = puvodniCislo.toString().concat(cisloTlacitka);
    
    function nastavCislo() {
        if (puvodniCislo == "0") {
            props.klikFunkce(cisloTlacitka)
        }
        else {
            props.klikFunkce(vysledek)
        }
    }

    return (
        <button onClick={() => nastavCislo()}>{props.cislo}</button>
    )
}

export default CiselneTlacitko;