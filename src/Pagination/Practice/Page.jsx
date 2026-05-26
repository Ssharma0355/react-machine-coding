import React, { useEffect, useState } from 'react'
import ProdCart from './ProdCart'

function Page() {
    const [prodcuts, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const PAGE_AMTS = 10;
    const getProducts = async()=>{
        try{
            setLoading("")
            const res = await fetch("https://dummyjson.com/products?limit=500")
            const json = await res.json();
            setProducts(json.products)
        }
        catch(err){
            console.log(err)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        getProducts()
    },[])

    const totalNoProducts = prodcuts.length;
    console.log(totalNoProducts)
    const totalNoPages = Math.ceil(totalNoProducts/PAGE_AMTS)
    console.log(totalNoPages)
    const start = currentPage*PAGE_AMTS;
    console.log(start)
    const end = start+PAGE_AMTS;
    console.log(end)
    console.log("currentPage :",currentPage)

     const handlePage =(num)=>{
        setCurrentPage(num)
     }

     const prevPage=()=>{
        setCurrentPage(prev => prev-1)
     }

     const nextPage=()=>{
        setCurrentPage(prev => prev+1)
     }

  return (
    <>
       <div style={{display:"flex", flexWrap:"wrap",padding:"4px",gap:"4px"}}>
     
     {prodcuts.slice(start,end).map(prod=>(
         <ProdCart key={prod.id} title={prod.title} image={prod.thumbnail} />
     ))}
       
    </div>
    <div style={{display:"flex",gap:"5px"}}>
        <button 
        disabled={currentPage === 0}
        
        onClick={prevPage}>Previous</button>
         {[...Array(totalNoPages).keys()].map(num=>(
             <p onClick={()=>handlePage(num)} style={{border:"1px solid black",padding:"5px",cursor:"pointer",
            backgroundColor:`${currentPage === num?"red":""}`
            }} key={num}>{num}</p>
         ))}
         <button disabled={currentPage === totalNoPages-1 } onClick={nextPage}>Next</button>
     </div>
    </>
 
  )
}

export default Page
