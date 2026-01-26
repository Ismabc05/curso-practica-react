import "../estilos/TodoButton.css"

function TodoButton () {
    return(
        <button onClick={(event) => {
            console.log("Le diste click al boton")
            console.log(event)
        }}>+</button>
    );
}

export { TodoButton };