const {blogs} = require('../data.js')
const Blogs = require('../models/blogModel.js')

exports.getAllBlogs =async (req,res)=>{
    let blogs = await Blogs.find()
    res.json({success:true, blogs:blogs})
    // res.send('all blogs data')
}
exports.getSingleBlog= async (req,res)=>{
    let {id} = req.params
    let blog = await Blogs.findById(id)
    res.json({success:true, blog:blog})

}

exports.createBlog = async (req,res)=>{
    // console.log(req.body)
    let {title,body, author} = req.body
    //third method 
    await Blogs.create({title,body, author})
    //second method 
    // let blog = new Blogs({title,body,author})
    // await blog.save()
    //1st method
    // let blog = new Blogs()
    // blog.title = title
    // blog.body = body
    // blog.author = author
    // await blog.save()
    res.json({success:true, blog:req.body , message:"blog created"})
    // res.send('new blog created')
}

exports.updateBlog =async (req,res)=>{
    // console.log(req.params)
    let {id} = req.params
    let {title,body, author} = req.body
    let blog =await Blogs.findByIdAndUpdate(id,{title,body,author})
    res.json({success:true, blog , message:"blog updated"})

}

exports.deleteBlog =async (req,res)=>{
    let {id} = req.params

    let blog = await Blogs.findByIdAndDelete(id)
    res.json({success:true, blog , message:"blog updated"})
    
}
