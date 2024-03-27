import { useEffect, useState } from "react";
import Ctverec from './Ctverec'
import { Typography } from "@mui/material";

function OblibenaBarva(props) {


  return (
    <>
      <Typography style={{color: props.barva}} variant='h2'>Oblíbená barva</Typography>
      <div>Jaká je vaše oblíbená barva?</div>
      <input type='color' id='barva' onChange={(e) => props.nastavBarvu(e.target.value)}></input>
      <Ctverec OblibenaBarva={props.barva} />
    </>
  );
  //e je event
}

export default OblibenaBarva;