import { useEffect, useState } from "react"
import "./game.css"
import { useNavigate } from "react-router-dom"
import Chrono from "./Chrono"







const Game: React.FC = () =>{
    
    
    const getRandomPositon = () => {
        const gamePage = document.querySelector('.game-page');
        return{
            top: (Math.floor(Math.random()  * gamePage?.clientHeight!)) + "px",
            left: (Math.floor(Math.random()  * gamePage?.clientWidth!)) + "px"
        }
    }
    const [tempsPass, setTempsPass] = useState(0);
    const [position, setPosition] = useState(getRandomPositon())
    const [nbKills, setNbKills] = useState(0)
    const [userCountry, setUserCountry] = useState("")
   
    const navigate = useNavigate()


    /*ANCHOR - localisation */
    const positionData = []


    // Fonction pour obtenir l'adresse à partir de la latitude et de la longitude
    async function  getAdressFromCoordinates(latitude: string, longitude: string) {
        const response =  await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)   
        const data = await response.json()
        setUserCountry(data.address.country)
        
    }
    // Fonction pour obtenir la position actuelle de l'utilisateur
   
    useEffect(() =>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position =>{
                ({
                    lat: position.coords.latitude.toString(),
                    lng: position.coords.longitude.toString()
                })
                const user = { 
                            lat: position.coords.latitude.toString(),
                            lng: position.coords.longitude.toString(), 
                            name: "Utilisateur" }
                positionData.push(user)
                getAdressFromCoordinates(position.coords.latitude.toString(),
                position.coords.longitude.toString())
            })}

    }, [])
    /*ANCHOR - localisation */
    
    
    
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
            let canVibrate = false;
            if('vibrate' in navigator){
                canVibrate = true;
            }
            if (canVibrate){
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
                <div className="scoreInfo">
                    Vous êtes en {userCountry}</div>
                <div className="scoreInfo"> 
                    {nbKills}/10 </div> 
                <div className="scoreInfo"> 
                    <Chrono onTimeUp={handleTimeUp} isPaused={false} />
                </div>
            </div>
            <div className="page game-page">
                <img src="./rabbit.png" className="divTokill" style={position} onClick={handelDivClick}/>
            </div>
        </>
    )
}

export default Game