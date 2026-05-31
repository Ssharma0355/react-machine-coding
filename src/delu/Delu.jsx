import React, { useEffect, useState } from 'react'

function Delu() {
    const API ="https://dummyjson.com/products"

    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(null);
    const [error, setError] = useState("");

    const getProducts = async () =>{
        try{
            setLoading(true)
            const res = await fetch(API)
            const json = await res.json();
            setProducts(json.products)
        }
        catch(err){
            setError(err)
        }
        finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        getProducts();
    },[])
  return isLoading ? <p>Loading</p>: (
    <div>
        {products.map(prod =>(
            <div key={prod.id}>{prod.title}</div>
        ))}
      
    </div>
  )
}

export default Delu
