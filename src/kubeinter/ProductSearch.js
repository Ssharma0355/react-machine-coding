import React, { useState, useEffect } from 'react';

export default function ProductSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const delay = 3000;

  const getData = async ()=>{
    try{
        const res = await fetch(`https://dummyjson.com/recipes/search?q=${searchTerm}`)
        if(!res.ok) throw new Error("Api Failed")
        const data = await res.json()
        setProducts(data.recipes)
    }
    catch(err){
        console.log(err)
    }
    finally{
        setIsLoading(false)
    }
}

  useEffect(() => {
    const timer = setTimeout(()=>{
        getData();
    }, delay)

    return ()=>{
        clearTimeout(timer)
    }
  
  }, [searchTerm]);

  return (
    <div style={{ padding: '20px' }}>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => {setSearchTerm(e.target.value);setIsLoading(!isLoading)}} 
        placeholder="Search products..."
        onFocus={() => setShowResult(true)}   // Always show when clicked
        onBlur={() => setShowResult(false)}
      />
      
      
        {showResult && isLoading ?
        <p>Loading</p>
        : 
        <div style={{ display: 'flex', flexDirection: 'column' }}>
        {showResult && 
        products.map(product => (
        <div key={product.id}>
         <p>{product.name}</p>
        </div>
  ))}
</div>}
      
    </div>
  );
}