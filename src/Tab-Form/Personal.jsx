import React from 'react'

function Personal({data, setData}) {
    const {name, gender} = data;

    const handleChange = (e) =>{
        const {id, value} = e.target
        setData(prev => ({...prev, [id]:value}))

    }
  return (
    <div style={{display:"flex", border:"1px solid black",padding:"10px"}}>
        <label>Name</label>
        <input type="text" id='name' value={name} onChange={handleChange} />
        <br />
        <label>Gender</label>
        <input type="text" id='gender' value={gender} onChange={handleChange} />
        <br />
    </div>
  )
}

export default Personal
