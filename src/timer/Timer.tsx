import React from "react";

interface TimerProps {
    time: number;
  }
  

const Timer:React.FC<TimerProps> = (props: TimerProps) => {

    return(
        <div className="timer">
            <span className="digits">
                {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
            </span>
            <span className="digits">
                {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}:
            </span>
            <span className="digits">
                {("0" + Math.floor((props.time / 10) % 100)).slice(-2)}
            </span>
        </div>
    )

}

export default Timer