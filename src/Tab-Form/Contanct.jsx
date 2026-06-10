import React from 'react'

function Contanct({data, setData}) {
    const {address, phone, email} = data;

    const handleChange =(e)=>{
        const {id, value} = e.target
        setData(prev => ({...prev, [id]:value}))
    }
  return (
    <div>
      Contanct
      <label>Address</label>
      <input type="text" value={address} id='address' onChange={handleChange} />
      <br />
      <label>Phone</label>
      <input type="text" value={phone} id='phone' onChange={handleChange} />
      <br />
      <label>Email</label>
      <input type="text" value={email} id='email' onChange={handleChange} />
      <br />

    </div>
  )
}

export default Contanct
