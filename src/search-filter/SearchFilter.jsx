import React, { useState } from 'react'

function SearchFilter() {
    const [search, setSearch] = useState("")
    const Candidate = ["Sachin","Rukma","Makoj","JK","Hathiram"];

    const filteredCandidate = Candidate.filter(p => p.toLowerCase().includes(search.toLowerCase()))
  return (
    <div>
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <div>
            {filteredCandidate.map((u,index)=>(
                <li key={index}>{u}</li>
            ))}
        </div>
      
    </div>
  )
}

export default SearchFilter
