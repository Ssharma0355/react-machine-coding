import React from 'react'
import Light from './Light'

function Config() {
    const lightCongif =[
        {
            id:1,
            color:"red",
            duration:3000
        },
        {
            id:2,
            color:"yellow",
            duration:3000
        },
        {
            id:3,
            color:"green",
            duration:3000
        }
    ]
  return (
    <div>
        <Light lightCongif={lightCongif} />
        <Light lightCongif={lightCongif} />

      
    </div>
  )
}

export default Config
