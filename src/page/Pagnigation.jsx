import React, { useEffect, useState } from 'react'
import ProductList from './ProductList';

function Pagnigation() {
    // https://dummyjson.com/products?limit=500
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const getData = async()=>{
        const res = await fetch("https://dummyjson.com/products?limit=1000");
        const resJson = await res.json();
        setProducts(resJson.products)
    }
    useEffect(()=>{
        getData()
    },[])

    const Prod_In_Page = 10;
    const Total_Products = products.length;
    const No_Of_Pages = Math.ceil(Total_Products/Prod_In_Page);
    const start = currentPage*Prod_In_Page;
    const end = start+Prod_In_Page;

    const selectPage=(index)=>{
        setCurrentPage(index)
    }

  return (
    <>

   

    <div style={{display:"flex", gap:"14px"}}>
    <button disabled={currentPage===0} onClick={()=>setCurrentPage(prev => prev-1)}>Previous</button>
        {[...Array(No_Of_Pages).keys()].map(n=>
    <p
    onClick={()=>{selectPage(n)}}
    style={{border:"1px solid black", padding:"12px", backgroundColor:`${currentPage ===n ?"red":""}`}}
     key={n}>{n}</p>
    )}
    <button disabled={currentPage===No_Of_Pages-1} onClick={()=>setCurrentPage(prev => prev+1)}>Next</button>

    </div>
      <div style={{display:"flex", flexWrap:"wrap", gap:"12px", margin:"12px"}}>
        
        {products.slice(start,end).map(prod=>(
         <ProductList key={prod.id} title={prod.title} image={prod.thumbnail} />
        ))}
    </div>
    </>
  
  )
}

export default Pagnigation
