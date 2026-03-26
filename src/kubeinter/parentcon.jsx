import React, { createContext } from 'react'
import Childcon from "./childcon"
export const UserContext = createContext();

const Parentcon = () => {
    const value = [{name:"Sachin",email:"ssharma0355@gmail.com"}]
  return (
    <div>
        <UserContext.Provider value={value}>
            <Childcon />
        </UserContext.Provider>
      
    </div>
  )
}

export default Parentcon
