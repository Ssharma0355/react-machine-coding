import React from 'react'

function Review({data, setData}) {
    const {name, address, phone,email, gender, isAgree} = data

    const ChangeTems =()=>{
        setData(prev => ({...prev, isAgree: !prev.isAgree}))
    }

  return (
    <div>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>address: {name}</p>
        <p>Gender: {gender}</p>
      <p>Agree?</p>
      <button onClick={ChangeTems}>{isAgree ? "Yes":"No"}</button>
    </div>
  )
}

export default Review
