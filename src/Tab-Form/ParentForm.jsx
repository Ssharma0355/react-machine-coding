import React, { useState } from 'react'
import Personal from './Personal'
import Contanct from './Contanct'
import Review from './Review'

function ParentForm() {
    const [index, setIndex] = useState(0);
    const [data, setData] = useState({name:"",email:"",phone:"",gender:"",isAgree:false, address:""})
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
    const nextTab =()=>{
            setIndex(prev => prev+1)
    }
    const prevTab =()=>{
        setIndex(prev => prev-1)
    }
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
        {congif.map((f,index)=>(
            <div style={{
                display:"flex",
                flexDirection:"row",
                border:"1px solid black",
                padding:"4px",
                width:"250px",
                cursor:"pointer"
            }} 
            onClick={()=>openForm(index)}
            
            key={index}>{f.name}</div>
        ))}
        <div>
            <CurrentForm  data={data} setData={setData}/>
        </div>
        <div>
            <button disabled={index === congif.length-1} onClick={nextTab}>Next</button>
            <button disabled={index === 0} onClick={prevTab}>Previous</button>

        </div>
        
      
    </div>
  )
}

export default ParentForm
