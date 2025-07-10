const express = require('express')
const {blogs} = require('../data.js')
const {getAllBlogs, createBlog, updateBlog, deleteBlog, getSingleBlog} = require('../controllers/blogController.js')
const router = express.Router()


router.get('/',getAllBlogs)
router.get('/:id',getSingleBlog)
router.post('/',createBlog)

router.put('/:id',updateBlog)
router.delete('/:id',deleteBlog)


module.exports  = router
