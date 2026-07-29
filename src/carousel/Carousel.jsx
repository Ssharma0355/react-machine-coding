import React, { useState } from 'react'

function Carousel() {
    const [index, setIndex] = useState(0);

    const config =[
        {
            id:1,
            title:"A"
        },
        {
            id:2,
            title:"B"
        },
        {
            id:3,
            title:"C"
        },
        {
            id:4,
            title:"D"
        },
    ]

    const Tabs = config[index].title;

    const giveTab =(n)=>{
        setIndex(n)
    }

    const getPrev = () =>{
        if(index === 0){
            setIndex(config.length)
        }
        setIndex(prev => prev-1)
    }

    const getNext = () =>{
        if(index === config.length-1 ){
            setIndex(0)
            return
        }
        setIndex(prev => prev+1)
    }
  return (
    <div>
        <h1>{Tabs}</h1>
        <div style={{display:"flex", gap:"12px"}}>
            <button onClick={getPrev}>Previous</button>
        {[...Array(config.length).keys()].map(n=>(
            <p
            onClick={()=>{giveTab(n)}}
             style={{border:"1px solid black",padding:"12px", cursor:"pointer"}} key={n}>{n}</p>
        ))}
            <button onClick={getNext}>Next</button>
        </div>
    </div>
  )
}

export default Carousel
