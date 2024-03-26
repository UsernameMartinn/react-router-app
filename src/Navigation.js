import { Outlet, Link } from "react-router-dom";
import MuiLink from '@mui/material/Link';
import Button from '@mui/material/Button';


const Navigation = () => {
    return (
        <>
            <nav>
                <Button style={{backgroundColor:'rgb(150, 200, 100)', color: "black", margin: 5}} variant="contained" href="/router-material-api/#">Home</Button>

                <Button style={{backgroundColor:'rgb(150, 200, 100)', color: "black", margin: 5}} variant="contained" href="/router-material-api/#/local_storage">Local storage</Button>

                <Button style={{backgroundColor:'rgb(150, 200, 100)', color: "black", margin: 5}} variant="contained" href="/router-material-api/#/nacteni_vstupu">Načtení vstupu</Button>

                <Button style={{backgroundColor:'rgb(150, 200, 100)', color: "black", margin: 5}} variant="contained" href="/router-material-api/#/mui">Mui</Button>

                <Button style={{backgroundColor:'rgb(150, 200, 100)', color: "black", margin: 5}} variant="contained" href="/router-material-api/#/api">Api</Button>

                <Button style={{backgroundColor:'rgb(150, 200, 100)', color: "black", margin: 5}} variant="contained" href="/router-material-api/#/eshop">Eshop</Button>

                <Button style={{backgroundColor:'rgb(150, 200, 100)', color: "black", margin: 5}} variant="contained" href="/router-material-api/#/oblibena_barva">Oblíbená barva</Button>
            </nav>
            <Outlet />
        </>
    )
}

export default Navigation;