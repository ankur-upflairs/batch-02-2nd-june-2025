import axios from 'axios'
import React, { useState } from 'react'

function DataPost() {
    const [post,setPost] = useState({
        title:'',body:''
    })
    const handleChange = (e)=>{
        setPost({...post,[e.target.name]:e.target.value})
    }
    async function handleSubmit(e) {
        e.preventDefault()
        let res = axios.post('http://localhost:3000/posts',post)
        console.log(res.data)
        setPost({
        title:'',body:''
    })
    }
  return (
    <div style={{width:'60%',margin:'10px auto',border:'1px solid'}}>
        <form onSubmit={handleSubmit} >
            <label htmlFor="">title </label>
            <input onChange={handleChange} name='title' value={post.title} type="text" />
            <label htmlFor="">body </label>
            <input onChange={handleChange} name='body' value={post.body} type="text" /><br />            
            <input type="submit" value="submit" />
        </form>
    </div>
  )
}

export default DataPost