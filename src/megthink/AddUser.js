import React, { useState } from 'react'
import axios from "axios"

const AddUser = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [resposne, setResponse] = useState([])

const API ="https://jsonplaceholder.typicode.com/posts"
const postdata = async()=>{
       const res = await axios.post(API,{
        title,
        body
    })
    setResponse(res.data)

}
console.log(resposne)
  return (
    <div>
        <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} />
        <br/>
        <input type='text' value={body} onChange={(e)=>setBody(e.target.value)} />
        <br/>
        <button onClick={postdata}>Post</button>
     {resposne && 
    <p>{resposne.title}</p> 
     }
        
    </div>
  )
}

export default AddUser
