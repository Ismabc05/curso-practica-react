import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";



const TodoContext = React.createContext();

function TodoProvider ({children}) {

    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage("TODOS_V1", [])
    const [valorInput, setValorInput] = React.useState("");
    const [openModal, setOpenModal] = React.useState(false);


    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
    const buscarTodos = todos.filter((todo) => {
        return todo.text
        ?.toLowerCase().includes(valorInput.toLowerCase());
        });

    const addTodo = (newText) => {
        const newTodos = [...todos];
        newTodos.push({
            text: newText,
            completed: false,
        });
        saveTodos(newTodos);
    };  

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

   return(
    <TodoContext.Provider value={{
        deleteTodo, completeTodo, totalTodos, buscarTodos, completedTodos, setValorInput, loading, error, valorInput, todos, openModal, setOpenModal, addTodo
    }}>
        {children}
    </TodoContext.Provider>
   ) 
}

export { TodoContext, TodoProvider };




