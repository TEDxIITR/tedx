import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from "@nextui-org/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import './normalize.css'
import '../src/Nav/nav.css'
import '../src/Hero/hero.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <React.StrictMode>
    <RouterProvider router={router}>
      <NextUIProvider>
      <App />
    </NextUIProvider>
    </RouterProvider>
  </React.StrictMode>,
)
