import React from 'react'
import TFK from './TFK'

function LightConfig() {
    const config =[
        {
            id:1,
            color:"red",
            duration:3000,
            message:"Stop!"
        },
        {
            id:2,
            color:"yellow",
            duration:2000,
            message:"Wait!"
        },
        {
            id:3,
            color:"green",
            duration:4000,
            message:"Go!"
        }
    ]
  return (
    <div>
        <TFK config={config} />
      
    </div>
  )
}

export default LightConfig
