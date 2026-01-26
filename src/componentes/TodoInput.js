import React from "react";
import "../estilos/TodoInput.css";

function TodoInput({valorInput, setValorInput}) {

    return (
        <input placeholder="Escribe tu siguiente tarea"  value={valorInput} onChange={(event) => { 
            setValorInput(event.target.value); 
            
        }}></input>
    );
}

export { TodoInput };