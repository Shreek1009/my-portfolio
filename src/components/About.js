import React, { useEffect, useState } from 'react';
import TypingEffect from 'react-typing-effect';
import '../styles/About.css';
import profileImg from '../assets/shreekara.jpg';
import myresume from '../assets/myresume.pdf'; 

const About = () => {
  const [videos, setVideos] = useState([]);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    // ---------------------------------------------------------
    // DOUBLE CHECK: Your Channel ID usually starts with "UC"
    // You wrote "YUC...". If that was a typo, change Y to U.
    // ---------------------------------------------------------
    const channelId = 'UCv3QmI4GSR3LMkCWywdRafQ'; // I removed the 'Y' assuming it was a typo for 'UC'
    const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY; 
    
    // Debugging: Check if Key exists (Open Console F12 to see)
    if (!apiKey) console.error("⚠️ API KEY IS MISSING! Check .env file");

    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=3&type=video`;

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error("API Failed");
        return res.json();
      })
      .then(data => {
        if (data.items) {
          setVideos(data.items);
        } else {
          console.warn("API returned no items:", data);
          setApiError(true);
        }
      })
      .catch(err => {
        console.error("Error fetching videos:", err);
        setApiError(true);
      });
  }, []);

  return (
    <div className="about-container-main">
      
      {/* --- ORIGINAL BIO SECTION --- */}
      <section id="about" className="about-section">
        <div className="about-text">
          <h1>Hello! I am Shreekara B</h1>
          
          <TypingEffect
            className="typing-effect"
            text={["Data Engineer at Oitro | AI & Full-Stack Developer | Blogger | Photographer & Videographer"]}
            speed={100}
            eraseSpeed={50}
            eraseDelay={500}
          />
          
          <p>
            I am passionate about building scalable and interactive web applications and creating
            impactful digital solutions that combine creativity with technology. With hands-on
            experience in full-stack development, data engineering, and AI-driven projects, I
            actively contribute to real-world, client-based applications and production deployments.
          </p>

          <p>
            Beyond coding, I enjoy photography and videography, capturing moments and sharing my
            journey through reels, blogs, and my YouTube channel. I believe in using technology not
            only to solve problems, but also to tell stories, build communities, and create meaningful
            experiences.
          </p>
          
          <div className="social-icons">
            <a href="https://github.com/shreekara1009" target="_blank" rel="noreferrer">
              <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg" alt="GitHub" height="30" width="40" />
            </a>
            <a href="https://linkedin.com/in/shreekara1009" target="_blank" rel="noreferrer">
              <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="LinkedIn" height="30" width="40" />
            </a>
            <a href="https://instagram.com/b_shreekara" target="_blank" rel="noreferrer">
              <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="Instagram" height="30" width="40" />
            </a>
            <a href="https://bshreekara.blogspot.com" target="_blank" rel="noreferrer">
              <img src="https://i.pinimg.com/564x/fb/af/3a/fbaf3a7a128b388ab2626aa0aad02651.jpg" alt="Blogspot" height="30" width="40" />
            </a>
          </div>
          
          <div className="about-buttons">
            <a href={myresume} className="btn" download>Download CV</a>
            <a href="#projects" className="btn">View Projects</a>
          </div>
        </div>
        
        <div className="about-image">
          <img src={profileImg} alt="Shreekara B" />
        </div>
      </section>

      {/* --- CREATIVE SECTION --- */}
      <div className="creative-wrapper">
        <h3 className="creative-title">My Creative Side</h3>
        <p className="creative-subtitle">
            Exploring the world through my lens. Check out my latest uploads.
        </p>

        {/* Video Grid with Fallback */}
        <div className="creative-grid">
          {!apiError && videos.length > 0 ? (
             videos.map((item) => (
              <div key={item.id.videoId} className="creative-card">
                <iframe
                  title={item.snippet.title}
                  src={`https://www.youtube.com/embed/${item.id.videoId}`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            ))
          ) : (
            // FALLBACK: If API fails, show this button instead of empty space
            <div className="api-fallback" style={{gridColumn: '1 / -1', textAlign: 'center'}}>
               <p style={{marginBottom: '20px', color: '#888'}}>
                 {apiError ? "Unable to load videos directly." : "Loading videos..."}
               </p>
               <a href="https://www.youtube.com/channel/UCv3QmI4GSR3LMkCWywdRafQ" target="_blank" rel="noreferrer" className="btn">
                  Visit My YouTube Channel
               </a>
            </div>
          )}
        </div>

        {/* Instagram Link */}
        <div className="creative-footer">
            <p>I also post photography & reels on Instagram:</p>
            <a href="https://instagram.com/shreek_photography" target="_blank" rel="noreferrer" className="insta-link">
                @shreek_photography ↗
            </a>
        </div>
      </div>

    </div>
  );
};

export default About;