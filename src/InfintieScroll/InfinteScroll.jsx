import React, { useEffect, useState } from 'react'
import InfiniteList from './InfiniteList';

function InfinteScroll() {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    // create state and pass intial value as 1

    const getData= async ()=>{
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=98_page=${page}`);
        const resjon = await res.json();
        setPosts(resjon)
    }

    useEffect(()=>{
        getData()
    },[page])

    console.log(posts) 
  return (
    <div>
        <InfiniteList posts={posts} />
    </div>
  )
}

export default InfinteScroll
