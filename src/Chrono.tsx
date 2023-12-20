import React, { useEffect, useState } from "react";

interface ChronoProps {
  onTimeUp: (newTime: number) => void;
  isPaused: boolean
}

const Chrono: React.FC<ChronoProps> = (props: ChronoProps) => {
  const [_, setTempsPass] = useState(0);
  const [debut, setDebut] = useState(0);
  const [isPaused, setIsPaused] = useState(false)
  
  useEffect(() => {
    setDebut(Date.now())
    let intervalID = null
      if(isPaused === false){
        intervalID = setInterval(() => setTempsPass(Math.random()), 10)
        return () => clearInterval(intervalID!);
      } else {
        clearInterval(intervalID!)
      }

  }, [isPaused]);

  const handelPause = () => {
    setIsPaused(!isPaused)
  }
 
  useEffect(() =>{
    props.onTimeUp((Date.now() - debut)/1000)

  })

  
  
  return (
    <div>
      Temps écoulé: {(Date.now() - debut)/1000} sec
      <button onClick={handelPause}>Pause</button>
    </div>
  );
};

export default Chrono;
