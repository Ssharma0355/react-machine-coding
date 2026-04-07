import React, { useEffect, useState } from 'react'

const Bounce = () => {
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] =useState(true);
    const [outout, setOutput] = useState([]);
    const [error, setError] = useState("")
    // const API = 'https://dummyjson.com/recipes/search?q=Margherita'
    useEffect(()=>{
        const timer = setTimeout(()=>{
             const getData = async () =>{
            try{
                const res = await fetch(`https://dummyjson.com/recipes/search?q=${input}`)
                const data = await res.json()
                setOutput(data.recipes)
            }
            catch(err){
                console.log("Error is :", err)
                setError(err)
            }
            finally{
                setIsLoading(false)
            }
        }
        getData();

        },3000)

        return ()=>{
            clearTimeout(timer)
        }
       
    },[input])

    // if(isLoading) return <p>Loading</p>
    if(error) return <p>{error}</p>
    if(!outout.length) return <p>No data found</p>

  return (
    <div>
        <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} />
        <ul>
        {outout.map( r => (
            <li key={r.id}>{r.name}</li>
        ))}
        </ul> 
    </div>
  )
}

export default Bounce
