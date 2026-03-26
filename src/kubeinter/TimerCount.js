import React, { useEffect, useRef, useState } from 'react'

const TimerCount = () => {
    const [counter, setCounter] = useState(0);
    const timerRef = useRef(null)
 
    const start =()=>{
        timerRef.current = setInterval(()=>{
         setCounter(prev => prev +1)
        },1000)
    }
    const pause =()=>{
       clearInterval(timerRef.current)
       timerRef.current =null
    }
    const reset =()=>{
        clearInterval(timerRef.current);
        timerRef.current = null;
        setCounter(0)

    }
  return (
    <div>

        {counter}
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>reset</button>
        
      
    </div>
  )
}

export default TimerCount
