import React, { useState } from 'react'
import Personal from './Personal'
import Contanct from './Contanct'
import Review from './Review'

function ParentForm() {
    const [index, setIndex] = useState(0)
    const congif = [
        {
            name:"Personal",
            component:Personal
            
        },
        {
            name:"contact",
            component:Contanct
            
        },
        {
            name:"review",
            component:Review
            
        }
    ]

    const CurrentForm = congif[index].component

    const openForm = (id)=>{
        setIndex(id)
    }
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
        {congif.map((f,index)=>(
            <div style={{
                display:"flex",
                flexDirection:"row",
                border:"1px solid black",
                padding:"4px",
                width:"250px"
            }} 
            onClick={()=>openForm(index)}
            
            key={index}>{f.name}</div>
        ))}
        <div>
            <CurrentForm />
        </div>
        
      
    </div>
  )
}

export default ParentForm
