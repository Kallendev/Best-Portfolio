const Comment = require('../models/Comment');

// Create comment
exports.createComment = async (req, res) => {
  try {
    const { name, comment } = req.body;
    const { postId } = req.params;

    if (!name || !comment) {
      return res.status(400).json({ message: 'Name and comment are required' });
    }

    const newComment = new Comment({ postId, name, comment });
    await newComment.save();

    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all comments for a post
exports.getCommentsByPost = async (req, res) => {
  try {
    const { postId } = req.params;
    const comments = await Comment.find({ postId }).sort({ createdAt: -1 });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
