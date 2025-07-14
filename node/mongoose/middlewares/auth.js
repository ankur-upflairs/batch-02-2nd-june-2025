const jwt = require('jsonwebtoken')
const { secret_key } = require('../controllers/userController')

exports.auth= (req,res,next)=>{
    try {
        
        let BearerToken = req.headers.authorization
        console.log(BearerToken)
        let token = BearerToken.split(' ')[1]
        console.log(token)
        if(!token){
           return  res.json({
                success : false , message:'token not included'
            })
        }
        let decoded = jwt.verify(token,secret_key)
        if(!decoded){
            res.json({
                success : false , message:'token not valid'
            })
        }
        next()
    
    } catch (error) {
        res.json({success:false, message:error.message})
    }

}