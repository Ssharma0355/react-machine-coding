import React, { useEffect, useMemo, useState } from 'react'
import UserModal from './UserModal';

const BrokenApi2 = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setisLoading] = useState(true);
    const [selectedUser, setSelectedUser] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    const getData = async () =>{
        try{
            const res = await fetch("https://jsonplaceholder.typicode.com/users")

            if(!res.ok) throw new Error("Api issue!")

            const data = await res.json()
            setUsers(data)

        }
        catch(err){
            setError(err);
        }
        finally{
            setisLoading(false);
        }
    }

    useEffect(()=>{
        getData();
    },[])

    // const filteredName = users.filter(u => u.name.toLowerCase().includes(search.toLowerCase()))
    // const filteredValue = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()))
    const filteredValue =useMemo(()=>{
        return users.filter( u => u.name.toLowerCase().includes(search.toLowerCase()))

    },[users, search]) 

    const handleModal =(user)=>{
        setSelectedUser(prev => user);
        console.log(user)
        setOpenModal(true)
    }
    
    console.log(selectedUser)


    if(isLoading === true) return <p>Loading.. Please Wait</p>

  return (
    <div>
        <div>
            <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)}/>
            {filteredValue.map(user => (
                <li key={user.id} onClick={()=>handleModal(user)}>{user.name}</li>
            ))}

        </div>
        <UserModal openModal={openModal} closeModal={()=>setOpenModal(false)} user={selectedUser} />

        {/* {users.length >0 
        ?
        <>
        {users.map(u =>(
            <li key={u.id}>{u.name}</li>
        ))}
        </>
        :
        <p>No Data Found</p>
    } */}
    </div>
  )
}

export default BrokenApi2
