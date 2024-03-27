import { useEffect, useState } from "react";
import Ctverec from './Ctverec'

function OblibenaBarva() {
  const [barva, nastavBarvu] = useState('');

  return (
    <>
      <div>Jaká je vaše oblíbená barva?</div>
      <input type='color' id='barva' onChange={(e) => nastavBarvu(e.target.value)}></input>
      <button id='ok' onClick={() => console.log(barva)}>Ok</button> <br />
      <Ctverec barva={barva}/>
    </>
  );
  //e je event
}

export default OblibenaBarva;