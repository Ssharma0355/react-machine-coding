import React from 'react'

function ProdList({title, image}) {
  return (
    <div style={{border:"1px solid black", borderRadius:"12px", margin:"2rem", padding:"2rem"}}>
        <img src={image} alt={title} />
        <p>{title}</p>
      
    </div>
  )
}

export default ProdList
