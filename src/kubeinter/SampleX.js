import React, { useState } from 'react'

const SampleX = () => {
    const [items, setitems] = useState([{
        id:1,
        name:"Wit",
        qty:1
    }])
    console.log(items)

    const addNew =()=>{
        const items = {id:Date.now(), name:"sach", qty:1}
        setitems(prev => [...prev, items])
    }
    // const addQt = (id)=>{
    //     setitems(prev=>{
    //         prev.map(item=>
    //             item.id === id
    //             ? {...item, qty: item.qty+1}
    //             : item
    //         )
    //         })
    //     }

    const addQt =(id)=>{
        setitems(prev =>
            prev.map(item =>
              item.id === id ? {...item, qty: item.qty+1} : item
            
            )
            )
    }
            
  return (
    <div>
        <button onClick={addNew}>Add more</button>
       {items.map(i=>(
        <li key={i.id}>{i.name} Quatitiy {i.qty} <button onClick={()=>addQt(i.id)}>Add Quantity</button></li>
       ))}
      
    </div>
  )
}

export default SampleX
