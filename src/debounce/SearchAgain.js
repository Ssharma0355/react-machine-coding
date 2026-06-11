import React, { useEffect, useState } from 'react'

function SearchAgain() {
    const [search, setSearch] = useState("")
    const [result, setResult] = useState([])
    const [isLoading, setLoading] = useState(null)
    const API ="https://dummyjson.com/recipes/search?q=Margherita";
    const getRecipes = async ()=>{
        try{
            setLoading(true)
            const res = await fetch(`https://dummyjson.com/recipes/search?q=${search}`)
            const data = await res.json();
            setResult(data.recipes)
        }
        catch(err){
            console.log(err)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        const Timer = setTimeout(()=>{
        getRecipes()
        })
        return ()=> clearTimeout(Timer)

    },[search])

  return (
    <div>
        <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)} />
        <div>
            {result.length === 0 ? <p>No Data</p> :result.map(r=>(
                <p key={r.id}>{r.name}</p>
            ))}

        </div>
      
    </div>
  )
}

export default SearchAgain
