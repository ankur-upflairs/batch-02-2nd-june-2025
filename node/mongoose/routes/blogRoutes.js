const express = require('express')
const {blogs} = require('../data.js')
const {getAllBlogs, createBlog, updateBlog, deleteBlog, getSingleBlog} = require('../controllers/blogController.js')
const { auth } = require('../middlewares/auth.js')
const router = express.Router()


router.get('/',getAllBlogs)
router.get('/:id',getSingleBlog)
router.post('/',auth, createBlog)

router.put('/:id', auth,updateBlog)
router.delete('/:id',auth,deleteBlog)


module.exports  = router
