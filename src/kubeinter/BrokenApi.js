import React, { use, useEffect, useState } from 'react'

const BrokenApi = () => {
    const API = "https://jsonplaceholder.typicode.com/users";
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("")

    useEffect(()=>{
        const getData = async () => {
            try{
                const res = await fetch(API); // ✅ FIX
        if (!res.ok) throw new Error("Error in api fetching");
        const data = await res.json();
                setUserData(data);

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
    const filteredValue = userData.filter( u => u.name.toLowerCase().includes(search.toLowerCase()))
    console.log(filteredValue)
    if(loading) return <p>Loading</p>

  return (
    <div>
        <input type='text' value={search} onChange={(e)=> setSearch(e.target.value)} />
        {filteredValue.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  )
}

export default BrokenApi
