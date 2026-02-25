import React from 'react'
import TrfficLight from './TrfficLight'

const ParentConfig = () => {
    const trafficConfig=[{
        color:"red",
        duration:2000,
      },
      {
      color:"yellow",
      duration:1000,
      },
      {
        color:"green",
        duration:4000
      }
    ]
  return (
    <div>
        <h1>Traffic light</h1>
        <TrfficLight config={trafficConfig} />
      
    </div>
  )
}

export default ParentConfig
