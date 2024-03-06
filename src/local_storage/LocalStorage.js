import { useEffect, useState } from "react";

function LocalStorage() {

  //const [pocet, nastavPocet] = useState(0) //[název proměné, funkce měnící proměnou] = useState(původní hodnota)
  const [pocet, nastavPocet] = useState(parseInt(localStorage.getItem("pocet") || 0));

  function zvysHodnotu() {
    nastavPocet(pocet + 1);
  }

  function snizHodnotu() {
    nastavPocet(pocet - 1);
  }
  useEffect(() => {
    localStorage.setItem("pocet", pocet);
  }, [pocet]) // effekt se provede pouze při změně v proměné pocet

  useEffect(() => {
    //let cisloZPameti = localStorage.getItem("pocet");
    //if (cisloZPameti != null) {
    //  nastavPocet(parseInt(cisloZPameti));
    //} else {
    //  nastavPocet(0);
    //}
    nastavPocet(parseInt(localStorage.getItem("pocet") || 0))
  }, []) // effekt se provede pouze při prvním renderování komponent

  //pokud by druhý parametr funkce useEffect byl prázdný, tak se provede vždy

  return (
    <>
      <div style={{fontSize: 40, margin: 40}} >
        <button style={{ backgroundColor: "lightgreen", color: "green", fontSize: 40, width: 50, margin: 30}} onClick={() => nastavPocet(pocet + 1)}>+</button>
        {pocet}
        <button style={{ backgroundColor: "salmon", color: "crimson", fontSize: 40, width: 50, margin: 30}} onClick={() => nastavPocet(pocet - 1)}>-</button>
      </div>

      <div style={{fontSize: 40, margin: 40}} >
        <button style={{fontSize: 40, width: 50, margin: 30}} onClick={zvysHodnotu}>+</button>
        {pocet}
        <button style={{fontSize: 40, width: 50, margin: 30}} onClick={snizHodnotu}>-</button>
      </div>
    </>
  );
}

export default LocalStorage;
