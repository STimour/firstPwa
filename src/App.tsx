import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


import './App.css'
import Game from './Game'
import Accueil from './Accueil'

function App() {
  const [count, setCount] = useState(0)
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Accueil />,
    },
    {
      path: '/game',
      element: <Game />
    }
  ])


  return (
    <>
    
    <RouterProvider router={router} />

    </>
  )
}

export default App
