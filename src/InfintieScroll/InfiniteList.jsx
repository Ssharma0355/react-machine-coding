import React from 'react'
import InfiteCard from './InfiteCard'

function InfiniteList({posts}) {
  return (
    <div style={{display:"flex", flexWrap:"wrap", padding:"2px"}}>
        {posts.map((p,id)=>(
            <InfiteCard key={id} title={p.title} body={p.body} />
        ))}
      
    </div>
  )
}

export default InfiniteList
