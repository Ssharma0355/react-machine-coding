import React, { useContext } from 'react'
import { UserContext } from './parentcon'

const Childcon = () => {
    const data = useContext(UserContext)
  return (
    <div>
        <h1>{data.map((d)=><li key={d.name}>{d.name}</li>)}</h1>
      
    </div>
  )
}

export default Childcon
