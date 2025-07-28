const express = require('express');
const router = express.Router();
const { createComment, getCommentsByPost } = require('../controllers/commentController');

router.post('/:postId', createComment);       // Anyone can comment
router.get('/:postId', getCommentsByPost);    // Fetch comments for a post

module.exports = router;
