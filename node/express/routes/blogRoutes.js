const express = require('express')
const {blogs} = require('../data.js')
const {getAllBlogs, createBlog, updateBlog, deleteBlog} = require('../controllers/blogController.js')
const router = express.Router()


router.get('/',getAllBlogs)

router.post('/',createBlog)

router.put('/:id',updateBlog)
router.delete('/:id',deleteBlog)


module.exports  = router
