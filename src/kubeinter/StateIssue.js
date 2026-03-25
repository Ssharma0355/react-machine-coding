import React, { useState } from 'react'

const StateIssue = () => {
    const [count, setCount] = useState(0);
    const increment = ()=>{
        setCount(count +1);
        setCount(count +1);
        // 0,0,1,1,2,2,3,3

        // setCount(prev => prev +1); 
        // setCount(prev => prev +1);
         // 0,0,2,2,4,4,6,6

        // count → snapshot value (stale inside same function)
        // prev → always latest updated value
    }
    console.log(count)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>Increment{count}</button>
      
    </div>
  )
}

export default StateIssue
