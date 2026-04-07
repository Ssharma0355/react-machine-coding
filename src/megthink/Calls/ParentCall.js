import React, { useState } from 'react'
import ChildCall from './ChildCall'

const ParentCall = () => {
    const [count, setCount] = useState(0)
    const handleClick =()=>{
        console.log("Clicked")
    }
  return (
    <div>
        <button onClick={handleClick}>Parent Btn</button>
        {count}
        <button onClick={()=> setCount(count+1)}>Parent count</button>

        <ChildCall onClick={handleClick} count={count} />

      
    </div>
  )
}

export default ParentCall
