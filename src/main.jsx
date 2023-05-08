import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router'


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
  </RouterProvider>,
)
