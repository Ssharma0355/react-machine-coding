import React, { useState } from 'react'

function Review({data, setData}) {
    const {name, email, address,age, phone, gender, isAgree} = data;

    const check =()=>{
        setData(prev =>({...prev,isAgree : !prev.isAgree}))
    }

  return (
    <div>
        <p>{name}, {age}, {email}</p>
        <p>{phone}</p>
        <p>{address}</p>
        <p>{gender}</p>
        <h1>are you sure? checked?</h1>
        <button onClick={check}>{`${isAgree ?"Yes":"No"}`}</button>
      
    </div>
  )
}

export default Review
