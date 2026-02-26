import React from "react";
import { useNavigate } from "react-router-dom";

function Edit() {

    const navigate = useNavigate()

    const atras = () => {
        navigate("/")
    }
    
    return(
        <>
            <h1>Editar</h1>
            <button onClick={atras}>Atras</button>
        </>
    )
}

export { Edit }