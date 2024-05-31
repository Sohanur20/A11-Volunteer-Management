import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import Router from './Components/Router/Router';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import { ToastContainer } from 'react-toastify';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={Router} />
    </AuthProvider>
    <ToastContainer />
  </React.StrictMode>,
)
