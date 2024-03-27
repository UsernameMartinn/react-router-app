import { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

function Api(props) {

  const [kavy, nastavKavy] = useState([]);
  const [vybranaKava, nastavVybranouKavu] = useState("");

  useEffect(() => {
    axios.get('https://api.sampleapis.com/coffee/hot')
      .then(odpoved => {
        console.log("Odpověď třetí strany")
        nastavKavy(odpoved.data);
      })

    console.log("Pokračuj ve vykonávání funkce")
  }, [])

  return (
    <>
      <Typography style={{color: props.barva}} variant='h2'>Kávička</Typography>
      <Paper>
        <Typography variant="subtitle1">
          {vybranaKava != "" && <span>Vybraná káva je: {vybranaKava}</span>}
        </Typography>
      </Paper>

      <Grid container spacing={2}>
        {kavy.map(kava =>
        (
          <>
            <Grid item xs={2}>
              <Paper onClick={() => nastavVybranouKavu(kava.title)} variant="elevation" elevation={4} square={false} style={{ textAlign: "center", margin: 5, padding: 10 }}>
                <Typography variant="h5">
                  <img src={kava.image} />
                  <Divider>
                    <Chip label={kava.title} size="medium" />
                  </Divider>
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

export default Api;
