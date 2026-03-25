import React, { useEffect, useState } from 'react'

const DebuundPrac = () => {
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [recipes, setRecipies] = useState([])


    // get data api
    const getData = async ()=>{
        try{
            const data = await fetch(`https://dummyjson.com/recipes/search?q=${input}`)
            const dataJson = await data.json();
            setRecipies(dataJson.recipes)
        }
        catch(err){

        }
        finally{
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        const timer = setTimeout(()=>{
            getData();
        },3000)

        return ()=>{
            clearTimeout(timer)
        }
    },[input]);

    if(isLoading === true){
        return <h1>Loadding....</h1>
    }

  return (
    <div>
        <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} onFocus={null}/>
        {recipes.length >0 
        ?<ul>
            {recipes.map((rec)=>(
                <li key={rec.id}>{rec.name}</li>
            ))}
        </ul> 
        :<p>No Data Found!!</p>}
    </div>
  )
}

export default DebuundPrac



// https://dummyjson.com/recipes/search?q=Margherita
