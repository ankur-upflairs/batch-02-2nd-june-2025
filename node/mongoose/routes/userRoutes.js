const express = require('express')
const { register, login } = require('../controllers/userController')

const router = express.Router()

router.post('/signup',register)
router.post('/login',login)


// router.get('/',(req,res)=>{
//     res.send('comments')
// })
// router.put('/:id',(req,res)=>{
//     res.send('comments')
// })

// router.delete('/:id',(req,res)=>{
//     res.send('comments')
// })



module.exports = router