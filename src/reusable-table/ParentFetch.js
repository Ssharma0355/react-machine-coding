import React, { useEffect, useState } from 'react'
import ReusableTable from './ReusableTable';

const ParentFetch = () => {
    const [data, setData] = useState([]);

    const getData = async () =>{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const resJson = await response.json();
        setData(resJson)
    }


    useEffect(()=>{
        getData();
    },[])
    console.table(data);
  return (
    <div>
        <ReusableTable data={data} />
      
    </div>
  )
}

export default ParentFetch
