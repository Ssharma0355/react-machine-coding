import React, { useState } from 'react'

const CRUD = () => {
    const [task, setTask] = useState("");
    const [list, setList] = useState([])
    const addTask =()=>{
        const item = {
            id:list.length+1,
            task:task,
        }
        setList(prev =>[...prev, item])
        setTask("")
    }

    const deleteTask =(id)=>{
        const filteredTask = list.filter(t => t.id !== id)
        setList(filteredTask)
    }
    console.log(list)
    
  return (
    <div>
        <input type='text' value={task} onChange={(e)=>setTask(e.target.value)} />
        <button onClick={addTask}>Add Task</button>
        {list.map(t =>(
            <li key={t.id}>{t.task}
            <button onClick={()=>deleteTask(t.id)}>Done</button>
            </li>
        ))}
    </div>
  )
}

export default CRUD
