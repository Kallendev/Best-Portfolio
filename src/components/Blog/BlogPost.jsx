import { useState } from 'react'

const BlogPost = ({ post }) => {
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState(post.comments)

  const handleComment = () => {
    if (comment.trim()) {
      setComments([...comments, { id: Date.now(), text: comment }])
      setComment('')
    }
  }

  return (
    <div className="blog-post">
      <img src={post.image} alt={post.title} className="post-image" />
      <h2>{post.title}</h2>
      <p>{post.content}</p>

      <div className="comment-section">
        <h4>Comments 💬</h4>
        <ul>
          {comments.map((c, index) => (
            <li key={index}>{c.text}</li>
          ))}
        </ul>
        <input 
          type="text" 
          value={comment}
          placeholder="Write a comment..." 
          onChange={e => setComment(e.target.value)} 
        />
        <button onClick={handleComment}>Comment</button>
      </div>
    </div>
  )
}

export default BlogPost
