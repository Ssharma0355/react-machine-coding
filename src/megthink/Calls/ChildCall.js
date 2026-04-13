import React from 'react'

const ChildCall = ({handleClick,count}) => {
    console.log("Child rendered")
  return (
    <div>
        {count}
        <button onClick={handleClick}>Child Click</button>
      
    </div>
  )
}

export default ChildCall
