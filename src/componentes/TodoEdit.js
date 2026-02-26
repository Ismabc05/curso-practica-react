import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TodoContext } from "../context/context";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { todos, actualizarTodo } = React.useContext(TodoContext);

  const todo = todos.find(todo => todo.id === Number(id));
  const [text, setText] = React.useState(todo ? todo.text : ""); // Si todo existe → usar todo.text como valor inicial, y si no ""

  if (!todo) return <p>Todo no encontrado</p>;

  const guardar = (e) => {
    e.preventDefault();
    actualizarTodo(todo.id, text);
    navigate("/");
  };

  const atras = () => {
    navigate("/")
  }

  return (
    <>
      <h1>Editar</h1>
      <form onSubmit={guardar}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">Guardar</button>
      </form>
      <button onClick={atras}>Atrás</button>
    </>
  );
}

export { Edit };