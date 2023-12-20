import { useEffect, useState } from 'react'
import Timer from './Timer'
import ControlButtons from './ControlButtons'

const Chrono = () => {
    const [isPaused, setIsPaused] = useState(false)
    const [time, setTime] = useState(0)

    const handlePause = () => {
        setIsPaused(!isPaused)
    }

    useEffect(() => {
        let interval = null
        if(isPaused === false){
            interval = setInterval(() => {
                setTime(seconds => seconds + 1);
              }, 10);
        } else if (!isPaused && time !== 0) {
            clearInterval(interval!);
        } 
          return () => clearInterval(interval!);
        }, [isPaused, time]);

    return(
        <>
        <div className="stop-watch">
            <Timer time={time} />
            <ControlButtons
                funcPause={handlePause}
                isPaused={isPaused}
            />
        </div>
        </>
    )

}
export default Chrono