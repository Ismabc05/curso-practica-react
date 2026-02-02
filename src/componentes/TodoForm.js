import React from "react"
import "../estilos/form.css";

function Form () {
    return(
        <form className="form">
            <label className="label">Escribe tu nuevo TODO</label>
            <textarea className="textarea" placeholder="Cortar cebolla..."></textarea>

            <div className="contenedor-botones">
                <button className="btn-cancelar ">Cancelar</button>
                <button className="btn-confirmar">Confirmar</button>
            </div>

        </form>
    )
}



export {Form} 