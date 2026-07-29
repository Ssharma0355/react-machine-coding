import React from 'react'

function ProductList({title, image}) {
  return (
    <div style={{ border:"1px solid black"}}>
        <img src={image} alt={title} />
        <p>{title}</p>
    </div>
  )
}

export default ProductList
