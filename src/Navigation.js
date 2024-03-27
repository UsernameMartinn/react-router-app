import { Outlet, Link } from "react-router-dom";
import Button from '@mui/material/Button';


const Navigation = (props) => {
    return (
        <>
            <nav>
                <Button style={{backgroundColor: props.barva, color: "black", margin: 5}} variant="contained" href="/react-router-app/#">Home</Button>

                <Button style={{backgroundColor: props.barva, color: "black", margin: 5}} variant="contained" href="/react-router-app/#/local_storage">Local storage</Button>

                <Button style={{backgroundColor: props.barva, color: "black", margin: 5}} variant="contained" href="/react-router-app/#/nacteni_vstupu">Načtení vstupu</Button>

                <Button style={{backgroundColor: props.barva, color: "black", margin: 5}} variant="contained" href="/react-router-app/#/mui">Mui</Button>

                <Button style={{backgroundColor: props.barva, color: "black", margin: 5}} variant="contained" href="/react-router-app/#/api">Api</Button>

                <Button style={{backgroundColor: props.barva, color: "black", margin: 5}} variant="contained" href="/react-router-app/#/eshop">Eshop</Button>

                <Button style={{backgroundColor: props.barva, color: "black", margin: 5}} variant="contained" href="/react-router-app/#/oblibena_barva">Oblíbená barva</Button>
            </nav>
            <Outlet />
        </>
    )
}

export default Navigation;