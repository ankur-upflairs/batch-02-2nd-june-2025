const mongoose = require('mongoose')
const {Schema} = mongoose

const blogSchema = new Schema({
    title:String,
    body:{
        type: String,
        required: true,
        unique:true 
    } ,
    author:{
        type:String
    },
    // createdAt:{
    //     type:Date ,
    //     default:Date.now 
    // },
    // updatedAt:{type:Date} 
},{timestamps:true})

module.exports = mongoose.model('Blog',blogSchema)


