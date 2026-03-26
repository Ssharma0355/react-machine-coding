import React, { useState } from 'react'

const Task = () => {
    const [task, setTask] = useState("");
    const [list, setList] = useState([]);

    const addTask = ()=>{
        const items = {
            id:list.length+1,
            text:task,
            isDone:false
        }
        
        setList(prev => [
            ...prev,items
        ]
        )
        setTask("")
    }

    const taskDone = (id) =>{
        const filteredValue = list.filter(list => list.id !== id)
        setList(filteredValue)
    }

    console.log(list)
  return (
    <div>
        <input type='text' value={task} onChange={(e)=> setTask(e.target.value)}/>
        <button onClick={addTask}>Add Task</button>
        <h1>ToDo Task</h1>
        {list.length > 0 ?
        <>
        {list.map(task =>(
            <li key={task.id}>{task.text}
            <button onClick={()=>taskDone(task.id)}>Done</button>
            
            </li>
        ))}
        
        </>
        :
        
        <p>No list found</p>}
      
    </div>
  )
}

export default Task
