import React from 'react'

function Profile({data, setData, error}) {
    const {name, age, gender} = data;

    const handleChange =(e)=>{
        const {id, value} = e.target
        setData(prev =>({...prev, [id]:value}))

    }
    return (
    <div>
        <h1>Profile</h1>
        <label >Name</label>
        <input type="text"  id="name" value={name} onChange={handleChange} />
        <br />
        <label >Age</label>
        <input type="number"  id="age" value={age} onChange={handleChange} />
        <br />
        <label >Gender</label>
        <input type="text"  id="gender" value={gender} onChange={handleChange} />
        <br />
        {error && <p style={{color:"red"}}>{error}</p>}
    </div>
  )
}

export default Profile
