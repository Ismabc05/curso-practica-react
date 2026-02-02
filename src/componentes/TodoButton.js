import "../estilos/TodoButton.css"
import React from "react";
import { TodoContext } from "../context/context";

function TodoButton () {

    const { openModal, setOpenModal} = React.useContext(TodoContext)

    const abrirModal = () => {
        setOpenModal(!openModal) // cambiamos al valor contrario que esté mel modal
    }

    return(

        <button  className="btn-agregar" onClick={abrirModal}>+</button>
    );
}

export { TodoButton };