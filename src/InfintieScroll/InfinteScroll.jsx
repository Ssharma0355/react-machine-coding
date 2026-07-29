import React, { useEffect, useState } from 'react'
import InfiniteList from './InfiniteList';

function InfinteScroll() {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(null)
    // create state and pass intial value as 1

    const getData= async ()=>{
        try{
            setLoading(true)
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`);
            const resjon = await res.json();
            setPosts((prev)=>[...prev,...resjon])
        }
        catch(err){
            console.log(err)
        }
        finally{
            setLoading(false)
        }
      
    }

    useEffect(()=>{
        getData()
    },[page])



    // handleInfiteScroll fn
    const handleInfiteScroll= async ()=>{
        if(loading) return
        try{
            // console.log("Scroll height", document.documentElement.scrollHeight);
            // console.log("Inner height", window.innerHeight)
            // console.log("scroll sctitivty", document.documentElement.scrollTop)
            if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight )
            {
                setPage(prev => prev + 1)
            }
        }
        catch(err){
            console.log(err)
        }

    }

    // effect for scroll logic
    useEffect(()=>{
        window.addEventListener("scroll", handleInfiteScroll)
        return ()=>{
            window.removeEventListener("scroll", handleInfiteScroll)
        }
    },[])

    console.log(posts) 
  return (
    <div>
        <InfiniteList posts={posts} />
        {loading && <p>Loading...</p>}
    </div>
  )
}

export default InfinteScroll
