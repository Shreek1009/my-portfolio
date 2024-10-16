import React from 'react';

const blogs = [
  { title: 'My Review of the Movie Kaal', link: 'https://shreekara.blogspot.com' },
  { title: 'Razorpay Integration', link: 'https://shreekara.blogspot.com' },
];

const Blogs = () => {
  return (
    <section id="blogs">
      <h2>Recent Blogs</h2>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index}>
            <a href={blog.link} target="_blank" rel="noreferrer">
              {blog.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Blogs;
