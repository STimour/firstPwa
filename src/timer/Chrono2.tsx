import { useEffect, useState } from 'react'
import Timer from './Timer'
import ControlButtons from './ControlButtons'

const Chrono2 = () => {
    const [isPaused, setIsPaused] = useState(false)
    const [time, setTime] = useState(0)

    useEffect(() => {
        let interval = null

        if (isPaused === false){
            interval = setInterval(() => {
                setTime((time) => time + 10)
            }, 10)
        } else {
            clearInterval(interval!)
        }
    }, [isPaused])


    const handlePause = () => {
        setIsPaused(!isPaused)
    }

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
export default Chrono2