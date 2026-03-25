import React, { use, useEffect, useState } from 'react'

const EffectIssue = () => {
    const [users, setUsers] = useState([]); 
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        const getData = async ()=>{
            try{
                const data = await fetch("https://jsonplaceholder.typicode.com/users")
                const dataJson = await data.json()
                setUsers(dataJson)
            }
            catch(err){
                console.log(err)
            }
            finally{
                setLoading(false)
            }
        }
        getData();
    },[])

    console.log(users)

    if(loading === true){
        return <p>Loading</p>
    }
  return (
    <div>
        {users.length >0 ?
           <>
            {users.map((user)=>(
                <li key={user.id}>{user.name}</li>
            ))}
           </>
        :
        <p>No users Found</p>}
    </div>
  )
}

export default EffectIssue
