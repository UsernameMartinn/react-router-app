import { useEffect, useState } from "react";
import Ctverec from './Ctverec'

function OblibenaBarva() {
  let barva
  return (
    <>
      <div>Jaká je vaše oblíbená barva?</div>
      <input type='color' id='barva'></input>
      <button id='ok' onClick={() => console.log(barva)}>Ok</button> <br />
      <Ctverec />
    </>
  );
}

export default OblibenaBarva;