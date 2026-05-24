import React from 'react'

function Contact({data, setData}) {
    const {email, phone, address} = data;
    const handleChange =(e)=>{
        const {id, value} = e.target
        setData(prev =>({...prev, [id]:value}))
    }
  return (
    <div>
        <div>
        <h1>Contact</h1>
        <label >Email</label>
        <input type="text"  id="email" value={email} onChange={handleChange} />
        <br />
        <label >Phone</label>
        <input type="number"  id="phone" value={phone} onChange={handleChange} />
        <br />
        <label >Address</label>
        <input type="text"  id="address" value={address} onChange={handleChange} />
        <br />
    </div>
      
    </div>
  )
}

export default Contact
