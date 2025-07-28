import BlogPost from './BlogPost'
import './Blog.css'

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Why I Love React 💖",
      content: "React makes building UIs sooo fun! Hooks are magical.",
      image: "/images/post1.jpg",
      comments: [
        { id: 1, text: "Totally agree!" },
        { id: 2, text: "Hooks saved my life 😭" },
      ],
    },
    {
      id: 2,
      title: "My Cat Project 🐾",
      content: "Building a cat adoption site taught me Flexbox the hard way 😂.",
      image: "/images/post2.jpg",
      comments: [],
    },
  ]

  return (
    <section className="blog">
      <h1 className="section-title">Kallen's Corner 💻</h1>
      <div className="blog-grid">
        {posts.map(post => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}

export default Blog
