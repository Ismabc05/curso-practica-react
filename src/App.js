import React from 'react';
import { TodoProvider } from './context/context';
import { AppUI } from './context/appui';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Edit } from './componentes/TodoEdit';
import { NotFound } from './componentes/TodoNotFound';

const rutas = createBrowserRouter([
  {
    path: "/",
    element: (
      <TodoProvider>
        <AppUI />
      </TodoProvider>
    ),
  },
  {
    path: "/edit/:id",
    element: (
      <TodoProvider>
        <Edit />
      </TodoProvider>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={rutas} />;
}

export default App;
