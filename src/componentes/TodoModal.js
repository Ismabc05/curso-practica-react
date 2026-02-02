import React from "react";
import ReactDOM from "react-dom";
import "../estilos/modal.css";

function Modal({ children }) {
    return ReactDOM.createPortal(
        
        <div className="modal">
            <div className="contenido-modal">
            {children}
            </div>
        </div>,

        document.getElementById("modal")
    );

}


export { Modal };