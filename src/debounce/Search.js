import React, { useEffect, useState } from 'react'

const Search = () => {
    const [value, setValue] = useState("");
    const [result, setResult] = useState([]);

    const getData = async()=>{
        const data = await fetch(`https://dummyjson.com/recipes/search?q=${value}`) 
        const dataJson = await data.json()
        setResult(dataJson.recipes)
    }

    useEffect(()=>{
        const timer = setTimeout(()=>{
            getData()
        },1000);

        return ()=>{
            clearTimeout(timer)
        }
    },[value])
    console.table(result);

  return (
    <div>
        <input value={value} onChange={(e)=> setValue(e.target.value)} />

        {result.map((r)=>(
            <li key={r.id}>{r.name}</li>
        ))}

      
    </div>
  )
}

export default Search
