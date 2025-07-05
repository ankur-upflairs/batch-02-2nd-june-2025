const express = require('express')
const {blogs} = require('./data.js')
const app = express()



// app.use((req,res,next)=>{
//     if ('user auth' ) next()
//     res.json({msg :'you are not authen'})
// })
app.use(express.urlencoded({extended:true}))
app.use(express.json())


//get all blogs
app.get('/blogs',(req,res)=>{
    res.json({blogs:blogs})
    // res.send('all blogs data')
})

app.post('/blogs',(req,res)=>{
    console.log(req.body)
    blogs.push(req.body)
    res.json({blog:req.body , message:"blog created"})
    // res.send('new blog created')
})
//dynamic routing 
app.put('/blogs/:id',(req,res)=>{
    // console.log(req.params)
    let {id} = req.params
    let newBlog = req.body
    res.send(`blog with id ${id} updated success fully`)
})
app.delete('/blogs/:id',(req,res)=>{
    res.send('blog deleted success fully')
})

app.listen(3000,'',()=>{
    console.log('server is running on port 3000')
})




