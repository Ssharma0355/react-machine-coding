import React from 'react'

function InfiteCard({id,title,body}) {
  return (
    <div style={{display:"flex", border:"1px solid black",margin:"12px"}}>
        <div style={{width:"400px",margin:"12px"}} >
        <h1>{title}</h1>
        <p>{body}</p>
        </div>
       
    </div>
  )
}

export default InfiteCard
