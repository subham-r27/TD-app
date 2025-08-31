// src/components/Blogs.js
import React from 'react';
import './blogs.css';

const Blogs = () => {
  return (
    <>
      <header className="page-header">
        <h1>Think Driven Blogs</h1>
        <img
          src="/icons/—Pngtree—yellow blog bubble text box_6274551.png"
          alt="blog-icon"
          className="icons"
        />
        <p>
          A Collective of Proven Technologists, Psychologists, and Doctors dedicated to improving
          mental health and thinking ability through evidence-based insights and practical strategies.
        </p>
      </header>

      <section className="featured-section">
        <h2>Featured Article</h2>
        <div className="featured-blog">
          <img className="featured-blog-img" src="/images/daniel-stiel-_fg4cIDtr5w-unsplash.jpg" alt="Leadership Psychology" width="600" />
          <div className="featured-blog-data">
            <p>December 2024 &bull; Featured &bull; Leadership</p>
            <h3>The Psychology of Effective Leadership</h3>
            <p>Discover how understanding human psychology can transform your leadership approach and team dynamics. Learn the science behind what makes great leaders and how to apply these principles in your own leadership journey.</p>
            <a 
              href="https://thinkdrivenblogs.substack.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="featured-blog-link"
            >
              Read Full Article on Substack →
            </a>
          </div>
        </div>
      </section>

      <section className="latest-stories-section">
        <h2>Latest Insights</h2>
        <div className="articles-grid">
          <article className="article-card">
            <img src="/images/jeremy-bishop-dvACrXUExLs-unsplash.jpg" alt="Mental Resilience" width="250" />
            <h4>Building Mental Resilience in Challenging Times</h4>
            <p>December 2024 &bull; Mental Health</p>
            <p>Learn practical strategies to strengthen your mental health and develop unshakeable resilience. This comprehensive guide covers evidence-based techniques for maintaining mental wellness.</p>
            <a 
              href="https://thinkdrivenblogs.substack.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="article-link"
            >
              Read More →
            </a>
          </article>
          
          <article className="article-card">
            <img src="/images/sebastian-unrau-sp-p7uuT0tw-unsplash.jpg" alt="Personal Growth" width="250" />
            <h4>Unlocking Your Growth Potential</h4>
            <p>December 2024 &bull; Personal Development</p>
            <p>Explore the science behind personal development and how to create lasting positive change in your life. Discover proven methods for continuous improvement and growth.</p>
            <a 
              href="https://thinkdrivenblogs.substack.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="article-link"
            >
              Read More →
            </a>
          </article>
          
          <article className="article-card">
            <img src="/images/kevin-oetiker-v17IhTzLICs-unsplash.jpg" alt="Cognitive Enhancement" width="250" />
            <h4>Enhancing Cognitive Performance</h4>
            <p>December 2024 &bull; Cognitive Science</p>
            <p>Discover evidence-based techniques to improve your thinking ability and mental performance. Learn how to optimize your brain function for better decision-making and problem-solving.</p>
            <a 
              href="https://thinkdrivenblogs.substack.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="article-link"
            >
              Read More →
            </a>
          </article>
        </div>
        <div className="more-posts-section">
          <a 
            href="https://thinkdrivenblogs.substack.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="more-posts-button"
          >
            Explore All Articles on Substack
          </a>
        </div>
      </section>

      <section className="newsletter-section">
        <h2>Stay Updated</h2>
        <div className="newsletter-content">
          <img src="/images/john-towner-3Kv48NS4WUU-unsplash.jpg" alt="Newsletter" width="250" />
          <div className="newsletter-text">
            <h4>Subscribe to Think Driven Blogs</h4>
            <p>Get weekly insights on psychology, leadership, and personal growth delivered directly to your inbox. Join our community of learners and thinkers.</p>
            <a 
              href="https://thinkdrivenblogs.substack.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="newsletter-button"
            >
              Subscribe Now →
            </a>
          </div>
        </div>
      </section>

      <footer className="blogs-footer">
        <hr />
        <p>© 2024 Think Driven &nbsp;|&nbsp; Follow us on Instagram, Facebook, Twitter, LinkedIn</p>
        <p>For queries, contact: info@thinkdriven.com</p>
        <p className="substack-note">
          📧 All our latest articles are published on <a href="https://thinkdrivenblogs.substack.com/" target="_blank" rel="noopener noreferrer">Substack</a>
        </p>
      </footer>
    </>
  );
};

export default Blogs;