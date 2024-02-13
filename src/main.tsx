import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import  Home from './routes/Home.tsx';
import  Contact  from './routes/Contact.tsx';
import ErrorPage from './routes/ErrorPage.tsx';
import ContactDetails from './routes/ContactDetails.tsx';

// configurando o router
/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
])

*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    //Página de erro
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      //Nested Routs - Identificador único
      {
        path: "/contact/"
      }
   

    ]
  },
 
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
