const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
  name: {
    type: String,
    required: true, // Name of person commenting
  },
  comment: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Comment', commentSchema);
