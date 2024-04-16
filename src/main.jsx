import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './componentes/About/About.jsx';
import Contact from './componentes/Contact/Contact.jsx';
import Home from './componentes/Home/Home.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: "/about",
        element: <About></About>
      },
      {
        path : "/contact",
        element: <Contact></Contact>


      },

    ]
  },
])
  
  
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)