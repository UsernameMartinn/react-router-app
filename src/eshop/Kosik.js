import { Typography } from "@mui/material";
import Polozka from './Polozka';
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip';

export default function Kosik(props) {

    const kosik = props.obsahKosiku;

    function cenaKosiku() {
        let soucet = 0
        for (let zbozi of kosik) {
            soucet += zbozi.polozka.price * zbozi.mnozstvi
        }
        return soucet
    }

    console.log(kosik)
    return(
        <>
        <Typography variant="h5" gutterBottom>Cena košíku: {cenaKosiku()}</Typography>
        {
            kosik.map(zbozi => (
                <>
                <Typography variant="h5" gutterBottom>{zbozi.polozka.title}</Typography>
                <img src={zbozi.polozka.image} />
                <Button style={{color: "red"}} color="error" variant='outlined' onClick={() => props.odebratPolozku(zbozi)}>Odebrat</Button>
                <Chip style={{backgroundColor: "rgb(80, 100, 80)", color: "white"}} label={"Množství: " + zbozi.mnozstvi} size="medium" />
                <Polozka data={zbozi.polozka} />
                </>
            ))

        }
        </>
    )

}