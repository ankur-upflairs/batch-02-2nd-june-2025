const express = require('express')

const router = express.Router()


router.get('/',(req,res)=>{
    res.send('comments')
})
router.post('/',(req,res)=>{
    res.send('comments')
})
router.put('/:id',(req,res)=>{
    res.send('comments')
})

router.delete('/:id',(req,res)=>{
    res.send('comments')
})



module.exports = router