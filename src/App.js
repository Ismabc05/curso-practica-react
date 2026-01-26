import React from 'react';
import { TodoTitle } from './componentes/TodoTitle.js';
import { TodoInput } from './componentes/TodoInput.js';
import { TodoList } from './componentes/TodoList.js';
import { TodoItem } from './componentes/TodoItem.js';
import { TodoButton } from './componentes/TodoButton.js';


//const defaultTodos = [
  //{ text: "Cortar cebolla", completed: true},
  //{ text: "Completar el curso de React", completed: false},
  //{ text: "LLorar con la llorona", completed: false},
  //{ text: "LALALALALALALA", completed: false},
//];

//localStorage.setItem("TODOS_V1", JSON.stringfy(defaultTodos));
// localStorage.removeItem("TODOS_V1");


function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName); // buscar en el localStorage si ya existe algo guardado con el nombre

  let parsedItem;

  if (!localStorageItem) { // si es null o esta vacio entoces
    localStorage.setItem(itemName, JSON.stringify(initialValue)); // le enviamos a localStorage un array vacio 
    parsedItem = initialValue; // y el parsedTodos que es lo que se muestra tambien vacio
  }else { // si tiene algo
    parsedItem = JSON.parse(localStorageItem); // parsedTodos muestra lo que haya en localStorageTodos
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItems) => { // ahora cuando completemos o eliminemos va a llamar esta funcion que e encargará de actualizar el estado inicial y el localStorage y así cuando recarguemos estén esos
    localStorage.setItem(itemName, JSON.stringify(newItems)); // actualizamos localStorage
    setItem(newItems); // actualiizamos el estado
  }

  return [item, saveItem];

};

function App() {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", [])
  const [valorInput, setValorInput] = React.useState("");


  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const buscarTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(valorInput.toLocaleLowerCase())
  })

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (
    <>
      <TodoTitle completed={completedTodos} total={totalTodos}/>

      <TodoInput valorInput={valorInput} setValorInput={setValorInput}/>

      {todos.every(todo => todo.completed) && <p>🎉 ¡Has completado todas las tareas!</p>} 

      <TodoList>
        {buscarTodos.map(todo => ( 
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}  
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}/> 
        ))}
      </TodoList>

      <TodoButton/>

    </>
  );
}

export default App;
