const express = require('express')
const mongoose = require('mongoose')
const {blogs} = require('./data.js')
const blogRouter = require('./routes/blogRoutes.js')
const userRouter = require('./routes/userRoutes.js')
const app = express()

mongoose.connect('mongodb+srv://lead:lead123@cluster0.mk94png.mongodb.net/test')
.then(()=>console.log('db connected'))
.catch(err=>console.log(err))

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/blogs',blogRouter)
app.use('/user',userRouter)



app.listen(3000,'',()=>{
    console.log('server is running on port 3000')
})
//===========================
//version v1 
// //get all blogs
// app.get('/blogs',(req,res)=>{
//     res.json({blogs:blogs})
//     // res.send('all blogs data')
// })

// app.post('/blogs',(req,res)=>{
//     console.log(req.body)
//     blogs.push(req.body)
//     res.json({blog:req.body , message:"blog created"})
//     // res.send('new blog created')
// })
// //dynamic routing 
// app.put('/blogs/:id',(req,res)=>{
//     // console.log(req.params)
//     let {id} = req.params
//     let newBlog = req.body
//     res.send(`blog with id ${id} updated success fully`)
// })
// app.delete('/blogs/:id',(req,res)=>{
//     res.send('blog deleted success fully')
// })

// app.listen(3000,'',()=>{
//     console.log('server is running on port 3000')
// })




