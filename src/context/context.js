import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom"



const TodoContext = React.createContext();

function TodoProvider ({children}) {

    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage("TODOS_V2", [])
    const [valorInput, setValorInput] = React.useState("");
    const [openModal, setOpenModal] = React.useState(false);
    const navigate = useNavigate()


    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
    const buscarTodos = todos.filter((todo) => {
        return todo.text
        ?.toLowerCase().includes(valorInput.toLowerCase());
        });

    const addTodo = (newText) => {
        const id = newTodoId(todos); // me pasaria por parametro el array todos
        const newTodos = [...todos];
        newTodos.push({
            id,
            text: newText,
            completed: false,
        });
        saveTodos(newTodos);
    };  

    const completeTodo = (id) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
        (todo) => todo.id === id
        );
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    }

    const deleteTodo = (id) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
      (todo) => todo.id === id
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
    }

    const editTodo = () => {
        navigate("/edit")
    }

   return(
    <TodoContext.Provider value={{
        deleteTodo, completeTodo, totalTodos, buscarTodos, completedTodos, setValorInput, loading, error, valorInput, todos, openModal, setOpenModal, addTodo, editTodo
    }}>
        {children}
    </TodoContext.Provider>
   ) 
}

function newTodoId(todoList) { // tenemos el array con los todos creados

    if(!todoList.length) {
        return 1;
    }

    const idList = todoList.map(todo => todo.id); // creamos otro array solo con los id
    const idMax = Math.max(...idList); // con math.max lo que hace es devolvernos el id mas grande, y ... lo pnemos para deglosar el array ya que math.max no permite array
    return idMax + 1; // y a ese id mas grande le suumamos uno y es le valor que va a tener el nuevo todo creado
}


export { TodoContext, TodoProvider };




