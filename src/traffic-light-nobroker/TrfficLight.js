import React, { useEffect, useState } from 'react'
import "./traffic.css"

const TrfficLight = ({config=[]}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(()=>{
    if(!config.length) return

    const timer = setTimeout(()=>{
      setActiveIndex((prev)=> (prev+1) % config.length);
    },config[activeIndex].duration)

    return ()=> clearTimeout(timer)
  },[activeIndex,config])
 
  return (
    <div
    style={{
      width: "100px",
      background: "#222",
      padding: "20px",
      borderRadius: "10px",
    }}
  >
{config.map((light, index)=>(
  <div key={index} 
  style={{
    width: "60px",
    height: "60px",
    margin: "10px auto",
    borderRadius: "50%",
    background:
      index === activeIndex ? light.color : "#555",
  }}>
  </div>
))}      
      
    </div>
  )
}

export default TrfficLight
