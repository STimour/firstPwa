import { useNavigate } from 'react-router-dom'
import { usePWAInstall } from "react-use-pwa-install";

import './App.css'


function Accueil() {
  const install = usePWAInstall();
  const navigate = useNavigate()


  return (
    <>
  
      <h1>KilleTheRabbit</h1>
      <div className="card">
        <button style={{margin: "30px"}} onClick={() => navigate("/Game")}>
          START 
        </button>
        <button style={{margin: "30px"}} onClick={() => install()}>Install</button>
      </div>
    </>
  )
}
export default Accueil

