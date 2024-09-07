import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css"
import Home from './routes/Home.jsx'
import Tictactoe from './routes/Tictactoe.jsx';
import Wordle from './routes/Wordle.jsx'
import Matching from './routes/Matching.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/tiktaktoe',
    element: <Tictactoe/>,
  },
  {
    path: '/wordle',
    element: <Wordle/>,
  },
  {
    path: '/matching',
    element: <Matching/>,
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
