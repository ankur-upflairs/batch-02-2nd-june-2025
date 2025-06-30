import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Datafetch() {
    const [posts,setPosts]=useState([])
    //blank array means useeffect runs only initial mount
    useEffect(()=>{
        async function getData(){
            let res = await axios.get('http://localhost:3000/posts')
            console.log(res.data)
            setPosts(res.data)
        }
        getData()
    },[])
  return (
    <div style={{width:'80%',margin:'10px auto'}}>        
        {posts.map((post,i)=>{
            return < >
                <div key={post.id} style={{border:'1px solid', marginBottom:'20px'}}>
                    <h3>{post.id}.Title : - {post.title}</h3>
                    <p>Body : - {post.body}</p>
                </div>
            </>
        })}
    </div>
  )
}

export default Datafetch