import "../estilos/TodoTitle.css";

function TodoTitle ({ total, completed}) {
  return(
    <h1>Has Completado <span className="number">{completed}</span> de <span className="number">{total}</span> TODOS</h1>
  );
}

export { TodoTitle };