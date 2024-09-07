import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css"
import Home from './routes/Home.jsx'
import Tiktaktoe from './routes/tictactoe.jsx';
import Wordle from './routes/Wordle.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/tiktaktoe',
    element: <Tiktaktoe/>,
  },
  {
    path: '/wordle',
    element: <Wordle/>,
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
