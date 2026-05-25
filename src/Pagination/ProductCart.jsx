import React from 'react'

function ProductCart({title, image}) {
  return (
    <div style={{display:"flex",margin:"10px", border:"1px solid black"}}>
        <img style={{ height:"90px",width:"90px"}} src={image} alt={title} />
        <span>{title}</span>
    </div>
  )
}

export default ProductCart
