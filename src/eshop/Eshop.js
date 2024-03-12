import { useState, useEffect } from "react";
import axios from "axios";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';

function Eshop() {

  const [polozky, nastavPolozky] = useState([]);
  const [cenaKosiku, nastavVybranouPolozku] = useState("");

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(odpoved => {
        console.log("Odpověď třetí strany")
        nastavPolozky(odpoved.data);
      })

    console.log("Pokračuj ve vykonávání funkce")
  }, [])

  return (
    <>
    <Typography variant='h2'>Eshop</Typography>
      <Paper>
        <Typography variant="subtitle1">
          {cenaKosiku != "" && <span>Cena košíku: {cenaKosiku}</span>}
        </Typography>
      </Paper>

      <Grid container spacing={5}>
        {polozky.map(polozka =>
        (
          <>
            <Grid item xs={5}>
              <Paper variant="elevation" elevation={4} square={false} style={{ textAlign: "center", margin: 5, padding: 10 }}>
                <Typography variant="h5">
                  <img src={polozka.image} />
                  <Divider>
                  <Chip label={polozka.title} size="medium" />
                  </Divider>
                  <Button onClick={() => nastavVybranouPolozku(parseFloat(cenaKosiku + polozka.price))} color='success' variant="outlined">Přidat do košíku: {polozka.price}</Button>
                  {cenaKosiku != "" && <Button onClick={() => nastavVybranouPolozku(parseFloat(cenaKosiku - polozka.price))} color='success' variant="outlined">Odeber</Button>}
                </Typography>
              </Paper>
            </Grid>
          </>
        )
        )}
      </Grid>
    </>
  );
}

export default Eshop;