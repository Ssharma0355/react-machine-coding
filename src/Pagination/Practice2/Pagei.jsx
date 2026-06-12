import React, { useEffect, useState } from 'react'
import ProdList from './ProdList'

function Pagei() {
    const [products, setProducts] = useState([]);
    const [currentTab, setCurrentTab] = useState(0);
    const totalProdInPage = 10;
    useEffect(()=>{
        const getProd = async()=>{
            const res = await fetch("https://dummyjson.com/products?limit=500")
            const ResJson = await res.json()
            setProducts(ResJson.products)
        }
        getProd()
    },[])

    const totalNumberofPage = Math.ceil(products.length/totalProdInPage)

    console.log(totalNumberofPage)
    const setIntial =(num)=>{
        setCurrentTab(num)

    }
    const start = currentTab*totalProdInPage;
    const end = start+totalProdInPage

  


  return (
    <>
    <div style={{display:"flex"}}>
        {[...Array(totalNumberofPage).keys().map((n)=>(
            <p key={n} onClick={()=>setIntial(n)} style={{margin:"1px",cursor:"pointer", border:"1px solid black",padding:"10px"}}>{n}</p>
        ))]}

    </div>
     <div style={{display:"flex", flexWrap:"wrap", padding:"2rem"}}>
        {products.slice(start,end).map((prod)=>(
        <ProdList key={prod.id} title={prod.title} image={prod.thumbnail} />
        ))}
    </div>
    </>
   
  )
}

export default Pagei
