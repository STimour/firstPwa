import { useState } from 'react'
import { Navigate, RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'


import './App.css'


function Accueil() {
 
  const navigate = useNavigate()


  return (
    <>
  
      <h1>divKiller</h1>
      <div className="card">
        <button onClick={() => navigate("/Game")}>
          START 
        </button>
      </div>
    </>
  )
}
export default Accueil