import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        const getData = async()=>{
            try{
            const res = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await res.json()
            setUsers(data)

            }
            catch(err){
                console.log(err)
            }
            finally{
                setIsLoading(false)
            }
        }
        getData()
    },[])

    if(isLoading) return <p>Loading</p>
    

  return (
    <div>
        {users.length>0 ?
        <div>
            {users.map(user =>(
                <li key={user.id}>{user.name}</li>
            ))}
        </div>
        :"No Data Found"}
      
    </div>
  )
}

export default Effect
