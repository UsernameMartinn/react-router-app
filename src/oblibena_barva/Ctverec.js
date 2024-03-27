import { useEffect, useState } from "react";

function Ctverec(props) {

    
    let oblibenaBarva = props.barva

    return (
        <>
            <div id="ctverec" style={{backgroundColor: oblibenaBarva, width: 100, height: 100, display: 'flex'}} />
        </>
    )
}

export default Ctverec;