import React, { useEffect, useState } from 'react'

function Light({lightCongif}) {
    const [index, setIndex] = useState(0);
    const CurrentColor = lightCongif[index]
    // console.log(CurrentColor.CurrentColor)

    useEffect(()=>{
    const Timer = setTimeout(()=>{
        setIndex((prev)=>(prev+1)%lightCongif.length)
    },CurrentColor.duration)

        return()=>{
            clearTimeout(Timer)
        }
    },[index])
  return (
    <div>
   {lightCongif.map((t, index)=>(
    <div key={index} style={{border:"1px solid black", height:"20px", width:"20px", margin:"4px",borderRadius:"100%",
    backgroundColor:`${CurrentColor.id === t.id ? t.color:""}`
}}></div>
   ))}
    </div>
  )
}

export default Light
