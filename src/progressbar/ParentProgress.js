import React, { useRef, useState } from 'react'
import ProgressBar from './ProgressBar'

const ParentProgress = () => {
    const [timer , setTimer] =useState(1);
    const TimerRef = useRef(null);

    TimerRef.current = setTimeout(()=>{
        setTimer(prev => prev +1)
    },2000)
   
  return (
    <div>
        <ProgressBar progress={timer} />
        <ProgressBar progress={30} />

    </div>
  )
}

export default ParentProgress
