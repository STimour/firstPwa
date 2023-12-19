import React, { useEffect, useState } from "react";

interface ChronoProps {
  onTimeUp: (newTime: number) => void;
}

const Chrono: React.FC<ChronoProps> = ({ onTimeUp }) => {
  const [_, setTempsPass] = useState(0);
  const [debut, setDebut] = useState(0);
  useEffect(() => {
    setDebut(Date.now())
    const intervalID = setInterval(() => setTempsPass(Math.random()), 120)
    return () => clearInterval(intervalID);
  }, []);

  useEffect(() =>{
    onTimeUp((Date.now() - debut)/1000)
  })

  // Return some JSX here
  return (
    <div>
      <h2>Temps écoulé: {(Date.now() - debut)/1000} sec</h2>
    </div>
  );
};

export default Chrono;
