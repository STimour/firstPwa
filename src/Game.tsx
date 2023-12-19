import { useState } from "react"
import "./game.css"
import { useNavigate } from "react-router-dom"
import Chrono from "./Chrono"
const getRandomPositon = () => {
    return{
        top: (Math.random()* 100 ) + "%",
        left: (Math.random()* 100 ) + "%"
    }
}



const Game: React.FC = () =>{
    const [tempsPass, setTempsPass] = useState(0);
    const [position, setPosition] = useState(getRandomPositon())
    const [nbKills, setNbKills] = useState(0)
    const navigate = useNavigate()

    const handelDivClick = () => {
        setPosition(getRandomPositon())
        const audioContext = new AudioContext();

        const gain = new GainNode(audioContext);
        gain.connect(audioContext.destination);
        gain.gain.value = 0.1;
     
        const oscillator = new OscillatorNode(audioContext);
        oscillator.connect(gain);
        oscillator.frequency.value =  Math.floor(Math.random() * (500)) + 100;;
        oscillator.start();
        oscillator.stop(0.1);

        if(nbKills < 9){
            setNbKills(nbKills + 1)
        }else{
            if ('vibrate' in navigator) {
                // Déclencher la vibration pendant 2 secondes
                navigator.vibrate(500);
              }
            navigate('/end/'+ tempsPass)
        }
    }

    const handleTimeUp = (newTime: number) => {
        setTempsPass(newTime)
    };


    return(
        <>
            <div className="score">
               <div className="scoreInfo"> {nbKills}/10 </div> 
               <div className="scoreInfo"> <Chrono onTimeUp={handleTimeUp}/> </div>
            </div>
            <div className="page game-page">
                <img src="../public/assets/rabbit.png" className="divTokill" style={position} onClick={handelDivClick}/>
            </div>
        </>
    )
}

export default Game