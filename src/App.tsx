import { RouterProvider, createBrowserRouter } from 'react-router-dom'


import './App.css'
import Game from './Game'
import Accueil from './Accueil'
import End from './End'

function App() {

  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Accueil />,
    },
    {
      path: '/game',
      element: <Game />
    },
    {
      path: '/end/:time',
      element: <End />
    }
  ])


  return (
    <>
    
      <RouterProvider router={router} />

    </>
  )
}

export default App
