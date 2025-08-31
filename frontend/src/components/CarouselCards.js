import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselCards.css';

function CarouselCards() {
  return (
    <div className="carousel-cards-section">
      <h2 className="section-title">Latest from Think Driven</h2>
      <p className="section-subtitle">Inspiring self-help, leadership, and growth insights</p>
      <Carousel controls={true} indicators={true} interval={5000}>
        {/* Carousel Item 1 - Leadership */}
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-card-image"
            src="/images/daniel-stiel-_fg4cIDtr5w-unsplash.jpg"
            alt="Leadership and personal growth"
          />
          <Carousel.Caption className="carousel-card-caption">
            <h3>The Psychology of Effective Leadership</h3>
            <p>Discover how understanding human psychology can transform your leadership approach and team dynamics.</p>
            <a 
              href="https://thinkdrivenblogs.substack.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="article-link"
            >
              Read on Substack
            </a>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Carousel Item 2 - Self-Help */}
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-card-image"
            src="/images/jeremy-bishop-dvACrXUExLs-unsplash.jpg"
            alt="Self-help and mental wellness"
          />
          <Carousel.Caption className="carousel-card-caption">
            <h3>Building Mental Resilience in Challenging Times</h3>
            <p>Learn practical strategies to strengthen your mental health and develop unshakeable resilience.</p>
            <a 
              href="https://thinkdrivenblogs.substack.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="article-link"
            >
              Read on Substack
            </a>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Carousel Item 3 - Growth Mindset */}
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-card-image"
            src="/images/sebastian-unrau-sp-p7uuT0tw-unsplash.jpg"
            alt="Personal growth and development"
          />
          <Carousel.Caption className="carousel-card-caption">
            <h3>Unlocking Your Growth Potential</h3>
            <p>Explore the science behind personal development and how to create lasting positive change in your life.</p>
            <a 
              href="https://thinkdrivenblogs.substack.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="article-link"
            >
              Read on Substack
            </a>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Carousel Item 4 - Cognitive Enhancement */}
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-card-image"
            src="/images/kevin-oetiker-v17IhTzLICs-unsplash.jpg"
            alt="Cognitive enhancement and thinking"
          />
          <Carousel.Caption className="carousel-card-caption">
            <h3>Enhancing Cognitive Performance</h3>
            <p>Discover evidence-based techniques to improve your thinking ability and mental performance.</p>
            <a 
              href="https://thinkdrivenblogs.substack.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="article-link"
            >
              Read on Substack
            </a>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Carousel Item 5 - Mental Health */}
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-card-image"
            src="/images/john-towner-3Kv48NS4WUU-unsplash.jpg"
            alt="Mental health and wellness"
          />
          <Carousel.Caption className="carousel-card-caption">
            <h3>Holistic Approaches to Mental Wellness</h3>
            <p>Integrating psychology, technology, and medicine for comprehensive mental health care.</p>
            <a 
              href="https://thinkdrivenblogs.substack.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="article-link"
            >
              Read on Substack
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
      <div className="carousel-footer">
        <p className="carousel-footer-text">
          Subscribe to our newsletter for weekly insights on psychology, leadership, and personal growth
        </p>
        <a 
          href="https://thinkdrivenblogs.substack.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="subscribe-button"
        >
          Subscribe to Think Driven Blogs
        </a>
      </div>
    </div>
  );
}

export default CarouselCards;