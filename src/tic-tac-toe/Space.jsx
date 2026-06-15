import React from 'react'
const spaceStyle={
    textAlign:"center",
    border:"1px solid black",
    height:"100px",
    width:"100px",
    cursor:"pointer"

}

function Space(props) {
  return (
    <div onClick={props.onClick} style={spaceStyle}>
      <h1>{props.value}</h1>
    </div>
  )
}

export default Space
