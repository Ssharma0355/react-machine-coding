import React from 'react'

function ProdCart({title, image}) {
  return (
    <div style={{display:"flex", border:"1px solid black"}}>
        <img style={{height:"100px",width:"100px"}} src={image} alt={title} />
        <span>{title}</span>
      
    </div>
  )
}

export default ProdCart
