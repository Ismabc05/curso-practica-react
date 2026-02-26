import React from "react";
import { TodoTitle } from '../componentes/TodoTitle';
import { TodoInput } from '../componentes/TodoInput';
import { TodoList } from '../componentes/TodoList';
import { TodoItem } from '../componentes/TodoItem';
import { TodoButton } from '../componentes/TodoButton';
import { TodoLoading } from '../componentes/TodoLoading';
import { TodoError } from '../componentes/TodoError';
import { TodoEmpty } from '../componentes/TodoEmpty';
import { Modal } from '../componentes/TodoModal';
import { Form } from '../componentes/TodoForm';
import { TodoContext} from '../context/context';

function AppUI() {
  const {
    loading,
    error,
    completeTodo,
    deleteTodo,
    buscarTodos,
    todos,
    openModal,
    setOpenModal,
    editTodo
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoTitle />
      <TodoInput />
      {todos.length > 0 && todos.every(todo => todo.completed) && <p style={{width: '100%', textAlign: 'center',}}>¡Has completado todas las tareas!</p>} 

      <TodoList>
        {loading && <TodoLoading />}
        {error && <TodoError />}
        {!loading && buscarTodos.length === 0 && <TodoEmpty />}

        {buscarTodos.map(todo => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
            onEdit={() => editTodo(todo.id)}
          />
        ))}
      </TodoList>

      <TodoButton />

      {openModal && (
        <Modal>
          <Form/>
        </Modal>
      )}

    </>
  );
}

export { AppUI };