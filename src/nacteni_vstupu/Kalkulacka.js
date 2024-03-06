import { useState } from "react";
import CiselneTlacitko from "./CiselneTlacitko";
import './Kalkulacka.css';

function Kalkulacka() {

const [cislo, nastavCislo] = useState("0");
const [operace, nastavOperaci] = useState("");
const [prvniCislo, nastavPrvniCislo] = useState(0)

function vybranaOperace(symbol) {
    nastavOperaci(symbol)
    nastavPrvniCislo(cislo)
    nastavCislo("0")
}

function spocitejVysledek() {
    let vysledek;
    let prvniCisloNum = parseInt(prvniCislo)
    if (operace == "+") {
        vysledek = prvniCisloNum + cislo;
    }
    else if (operace == "-") {
        vysledek = prvniCisloNum - cislo;
    }
    else if (operace == "*") {
        vysledek = prvniCisloNum * cislo;
    }
    else if (operace == "/") {
        vysledek = prvniCisloNum / cislo;
    }
    nastavCislo(vysledek)
}

return (
    <>
    <div id="kalkulacka">
    <div id="displej">{cislo}</div>

    <div id="tlacitka">
        <CiselneTlacitko cislo={7} klikFunkce={nastavCislo} puvodniCislo={cislo}/>
        <CiselneTlacitko cislo={8} klikFunkce={nastavCislo} puvodniCislo={cislo}/>
        <CiselneTlacitko cislo={9} klikFunkce={nastavCislo} puvodniCislo={cislo}/>
        <button onClick={() => vybranaOperace("+")}>+</button>
        <br/>
        <CiselneTlacitko cislo={4} klikFunkce={nastavCislo} puvodniCislo={cislo}/>
        <CiselneTlacitko cislo={5} klikFunkce={nastavCislo} puvodniCislo={cislo}/>
        <CiselneTlacitko cislo={6} klikFunkce={nastavCislo} puvodniCislo={cislo}/>
        <button onClick={() => vybranaOperace("-")}>-</button>
        <br/>
        <CiselneTlacitko cislo={1} klikFunkce={nastavCislo} puvodniCislo={cislo}/>
        <CiselneTlacitko cislo={2} klikFunkce={nastavCislo} puvodniCislo={cislo}/>
        <CiselneTlacitko cislo={3} klikFunkce={nastavCislo} puvodniCislo={cislo}/>
        <button onClick={() => vybranaOperace("*")}>*</button>
        <br/>
        <button onClick={() => vybranaOperace("=")}>=</button>
        <CiselneTlacitko cislo={0} klikFunkce={nastavCislo} puvodniCislo={cislo}/>
        <button onClick={() => vybranaOperace("C")}>C</button>
        <button onClick={() => vybranaOperace("/")}>/</button>
    </div>
    </div>
    </>
)
}

export default Kalkulacka;