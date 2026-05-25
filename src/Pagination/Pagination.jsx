import React, { useEffect, useState } from 'react'
import ProductCart from './ProductCart';

function Pagination() {
    const [product, setProduct] = useState([]);
    const [isLoading, setLoading] = useState(null);
    const [currentPage, setCurrentPage] = useState(0)
    const PAGE_NO = 10;

    const getProducts = async () =>{
        try{
            setLoading(false)
            const res = await fetch("https://dummyjson.com/products?limit=500")
            const json = await res.json();
            setProduct(json.products)
        }
        catch(err){
            console.log(err)
        }
        finally{
            setLoading(true)
        }
    }

    useEffect(()=>{
        getProducts();
    },[])
    const totalProducts = product.length;
    const totalNoPages = Math.ceil(totalProducts / PAGE_NO);
    const start = currentPage * PAGE_NO
    const end = start+PAGE_NO
    // console.log(totalNoPages)
    const selectPage=(n)=>{
        setCurrentPage(n)
    }
    const prevPage =()=>{
        setCurrentPage(prev => prev-1)
    }
    const nextPage=()=>{
        setCurrentPage(prev => prev+1)
    }

  return (
    <div>
        <div style={{display:"flex",margin:"10px",padding:"2px"}}>
            <button disabled={currentPage === 0} onClick={prevPage}>Prev</button>
            {[...Array(totalNoPages).keys()].map(n=>(
                <div
                onClick={()=>selectPage(n)}
                style={{
                    padding:"10px",
                    border:"1px solid black",
                    margin:"2px",
                    cursor:"pointer",
                    backgroundColor:`${currentPage === n ? "red":""}`
                }}
                
                key={n}>{n}</div>
            ))}
            <button disabled={currentPage === totalNoPages-1} onClick={nextPage}>Next</button>

        </div>
        <div style={{display:"flex", flexWrap:"wrap", padding:"2px"}}>
            {product.slice(start,end).map(prod =>(
               <ProductCart key={prod.id} title={prod.title} image={prod.thumbnail} />
            ))}
        </div>
    </div>
  )
}

export default Pagination
