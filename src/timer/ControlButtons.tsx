import React from "react";

interface typeButtons{
    isPaused: boolean,
    funcPause: (() => void)
}

const ControlButtons:React.FC<typeButtons> = (props: typeButtons) =>{

    return(
        <>
            <button onClick={props.funcPause}>{props.isPaused === false ? "Pause" : "Reprendre"}</button>
        </>
    )
}

export default ControlButtons