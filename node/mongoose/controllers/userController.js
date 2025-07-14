const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
exports.secret_key = 'my secret key'

exports.register=async (req,res) =>{
    const {email, password} = req.body
    let hashPassword= await bcrypt.hash(String(password),10)
    try {        
        await User.create({email,password:hashPassword})
        res.json({
            success:true, message:'user created successfully'
        })
    } catch (error) {
        res.json({
            success:false, message: error.message
        })
    }
}

exports.login=async (req,res) =>{
    const {email, password} = req.body
    // console.log(email)
    try {        
        let user = await User.findOne({email:email})
        // console.log(user)
        if(!user) {
            res.json({
            success:false, message:'user not found'
         })}
        let passwordMatch = await bcrypt.compare(String(password) , user.password)
        if(!passwordMatch){
            res.json({
            success:false, message:'password does not match'
         })
        }
        let token = jwt.sign({email},this.secret_key,{
            expiresIn:'7d'
        })
        res.json({
            success:true, message:'user login successfully',
            token:token
        })
    } catch (error) {
        res.json({ 
            success:false, message: error.message
        })
    }
}





