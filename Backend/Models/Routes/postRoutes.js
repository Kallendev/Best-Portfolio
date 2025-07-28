const express = require('express');
const router = express.Router();
const { createPost, getAllPosts, getPostById } = require('../controllers/postController');

router.post('/', createPost);         // You (admin) add a post
router.get('/', getAllPosts);         // Visitors see all posts
router.get('/:id', getPostById);      // View single post

module.exports = router;
