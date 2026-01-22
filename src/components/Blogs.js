import React, { useEffect, useState } from 'react';
import '../styles/Blogs.css';  // Your styling file for the blogs section

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);  // State to store blog posts
  const [error, setError] = useState(null);  // State to store errors, if any

  // Helper function to extract first image from blog HTML content
  const getImageFromContent = (html) => {
    const match = html.match(/<img[^>]+src="([^">]+)"/);
    return match ? match[1] : null;
  };

  useEffect(() => {
    const blogId = '6658890885641731328';  // Blogspot Blog ID for bshreekara.blogspot.com
    const apiKey = process.env.REACT_APP_BLOGGER_API_KEY;  // Fetching API Key from .env file

    // Fetch recent posts from Blogger API
    fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);  // Log the API response for debugging

        if (data.items && data.items.length > 0) {
          setBlogs(data.items.slice(0, 9));  // Set the first 9 blog posts in state
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
        {blogs.map((blog, index) => {
          const image = getImageFromContent(blog.content);
          const date = new Date(blog.published).toLocaleDateString();

          return (
            <li
              key={index}
              className="blog-card"
              data-aos="fade-up"
              data-aos-delay={index * 50}
              onClick={() => window.open(blog.url, '_blank')}
            >
              {image && <img src={image} alt={blog.title} className="blog-preview-img" />}
              <div className="blog-content">
                <h3>{blog.title}</h3>
                <p>{date}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Blogs;
