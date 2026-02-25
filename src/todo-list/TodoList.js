import React, { useState } from 'react'

const TodoList = () => {
    const [input, setInput] = useState("");
    const [todo, setTodo] = useState([]);

    const addTask=()=>{
        if(!input) return;
        const list ={
            id:Date.now(),
            value:input,
            status:false,
        }
        setTodo(prev => [...prev,list]);
        setInput("")
    }

    const deleteTask=(id)=>{
        const filterItem = todo.filter((item)=> id !== item.id)
        setTodo(filterItem)
    }

  return (
    <div>
        <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={addTask}>Add Task</button>
        <>
        {todo.map((t)=>(
            <li key={t.id}>{t.value}
            <button onClick={()=>deleteTask(t.id)}>Delete</button>
            </li>
        ))}
        </>
    </div>
  )
}

export default TodoList
