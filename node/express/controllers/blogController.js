const {blogs} = require('../data.js')

exports.getAllBlogs = (req,res)=>{
    res.json({blogs:blogs})
    // res.send('all blogs data')
}

exports.createBlog = (req,res)=>{
    console.log(req.body)
    blogs.push(req.body)
    res.json({blog:req.body , message:"blog created"})
    // res.send('new blog created')
}

exports.updateBlog = (req,res)=>{
    // console.log(req.params)
    let {id} = req.params
    let newBlog = req.body
    res.send(`blog with id ${id} updated success fully`)
}

exports.deleteBlog = (req,res)=>{
    res.send('blog deleted success fully')
}
