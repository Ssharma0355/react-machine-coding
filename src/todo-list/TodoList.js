import React, { useState } from 'react'

const TodoList = () => {
    const [input, setInput] = useState("");
    const [todo, setTodo] = useState([]);

    const handleTodo =(e)=>{
        e.preventDefault()
        const list={
            id:todo.length+1,
            value:input,
            status:false
        }
        setTodo(prev =>[...prev,list])
        setInput("")
    }
    const deleteTask=(id)=>{
        const filterItem = todo.filter(todo => todo.id === id);
        // setTodo(prev =>[...prev,filterItem])
       
    }
console.table(todo)
  return (
    <div>
        <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} />
        <button onClick={handleTodo}>Add</button>
      <div>
            {todo.map((list,id)=>(
                <li key={id}>{list.value}
                <button onClick={deleteTask(list.id)}>Delete</button>
                </li>
            ))}
      </div>
    </div>
  )
}

export default TodoList
