import React, { useEffect, useState } from 'react';
import '../styles/Blogs.css';  // Your styling file for the blogs section

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);  // State to store blog posts
  const [error, setError] = useState(null);  // State to store errors, if any

  useEffect(() => {
    const blogId = '6494922402847523765';  // Blogspot Blog ID for bshreekara.blogspot.com
    const apiKey = process.env.REACT_APP_BLOGGER_API_KEY;  // Fetching API Key from .env file

    // Fetch recent posts from Blogger API
    fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);  // Log the API response for debugging

        if (data.items) {
          setBlogs(data.items.slice(0, 5));  // Set the first 5 blog posts in state
        } else {
          setError('No blog posts found');  // Handle case where no posts are found
        }
      })
      .catch(error => {
        console.error('Error fetching blog posts:', error);
        setError('Failed to fetch blog posts');  // Store error message in state
      });
  }, []);

  return (
    <section id="blogs" className="blogs-section">
      <h2>Recent Blogs</h2>
      {error && <p className="error-message">{error}</p>}  {/* Display error if any */}
      <ul>
        {blogs.map((blog, index) => (
          <li key={index}>
            <a href={blog.url} target="_blank" rel="noreferrer">
              {blog.title}
            </a>
            <p>{new Date(blog.published).toLocaleDateString()}</p> {/* Display the published date */}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Blogs;
