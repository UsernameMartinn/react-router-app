import { useState, useEffect } from "react";
import axios from "axios";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Kosik from './Kosik';
import Polozka from './Polozka';

function Eshop() {

  const [polozky, nastavPolozky] = useState([]);
  const [kosik, nastavKosik] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(odpoved => {
        nastavPolozky(odpoved.data);
      })
  }, [])

  function odebratPolozku(odebraneZbozi) {
    let kosik2 = [...kosik];
    let odebratPolozku = false;
    for (let zbozi of kosik2) {
      if (zbozi.polozka == odebraneZbozi.polozka) {
        if (zbozi.mnozstvi > 1) {
          zbozi.mnozstvi--;
        } else {
          odebratPolozku = true;
        }
      }
    }
    if (odebratPolozku) {
      kosik2 = kosik2.filter(zbozi => zbozi.polozka !== odebraneZbozi.polozka);
    }
    nastavKosik(kosik2);
  }

  function pridatPolozku(pridanaPolozka) {
    let kosik2 = [...kosik];
    let obsahujePolozku = false;
    for (let zbozi of kosik2) {
      if (zbozi.polozka == pridanaPolozka) {
        obsahujePolozku = true;
        zbozi.mnozstvi++;
      }
    }
    if (!obsahujePolozku) {
      kosik2.push({ polozka: pridanaPolozka, mnozstvi: 1 });
    }
    nastavKosik(kosik2)
  }

  console.log(kosik)

  return (
    <>
      <Typography variant='h2'>Eshop</Typography>
      <Paper>
        <Typography variant="subtitle1">
          <Kosik obsahKosiku={kosik} odebratPolozku={odebratPolozku} />
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
                  <Polozka data={polozka} />
                  <Button onClick={() => pridatPolozku(polozka)} style={{backgroundColor:'rgb(100, 200, 200)', color: "black"}} variant="contained">Přidat do košíku</Button>
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