import React, { useEffect, useState } from 'react'

function Light({lightCongif}) {
    const [index, setIndex] = useState(0);
    const CurrentColor = lightCongif[index]
    // console.log(CurrentColor.CurrentColor)

    useEffect(()=>{
    const Timer = setTimeout(()=>{
        setIndex((prev)=>(prev+1)%lightCongif.length)
    },CurrentColor.CurrentColor)

        return()=>{
            clearTimeout(Timer)
        }
    },[index])
  return (
    <div>
   {lightCongif.map((t, index)=>(
    <div key={index}>{t.color}</div>
   ))}

      
    </div>
  )
}

export default Light
