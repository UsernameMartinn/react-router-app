import { Typography } from "@mui/material"

export default function Polozka(props) {
    const polozka = props.data

    return(
        <>
        <Typography variant="h7" gutterBottom>Cena: {polozka.price}</Typography>
        <img scr={polozka.image} style={{width:"100px"}}></img>
        </>
    )
}