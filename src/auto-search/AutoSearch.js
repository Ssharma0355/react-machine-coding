import React, { useEffect, useState } from 'react'

const AutoSearch = () => {
    const [input, setInput] = useState("");
    const [data, setData ] = useState([]);

    const getData = async () =>{
        const resposne = await fetch(`https://dummyjson.com/recipes/search?q=${input}`)
        const responseJson = await resposne.json()
        setData(responseJson.recipes)
    }

    useEffect(()=>{
        const timer = setTimeout(()=>{
            getData();
        },3000)

        return ()=>{
            clearInterval(timer)
        }

    },[input])

  return (
    <div>
        <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} />
        <div>
            {data && data.map((r)=>(
                <li key={r.id}>{r.name}</li>
            ))}
        </div>
    </div>
  )
}

export default AutoSearch
