import React from 'react'
const spaceStyle={
    border:"1px solid black",
    padding:"2rem",
    cursor:"pointer",
    height:"100px",
    width:"100px"
    
}

function MainSpace(props) {
  return (
    <div onClick={props.onClick} style={spaceStyle}>
      <h1>{props.value}</h1>
    </div>
  )
}

export default MainSpace
