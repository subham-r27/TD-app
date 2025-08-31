import React from 'react';
import './youtube.css';

// Main React component for the YouTube Video Gallery
const YouTubeGallery = () => {
  // Array of YouTube video IDs to display in the gallery.
  // You can modify this array to include different video IDs if needed.
  const videoIds = [
    'VlFDxp0s05Y', // Video 1
    'VlFDxp0s05Y', // Video 2
    'VlFDxp0s05Y', // Video 3
    'VlFDxp0s05Y', // Video 4
  ];

  // The YouTube playlist URL you want the button to link to.
  const playlistUrl = "https://youtube.com/playlist?list=PLz4vnRMF3zTrIhvbUXx8pD4sTRhFkUjyH&si=lUPhNyndF7LixAR4";

  return (
    <>
      {/* Full-screen blue header section, now using hero-section classes */}
      <header className="hero-section">
        {/* Replaced the broken image link with a clean, scalable SVG icon */}
        <svg
          className="hero-section-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="120px"
          height="120px"
        >
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
        <h1 className="hero-section-subtitle">Our YouTube</h1>
        <p className="hero-section-description">
          A Collective of Proven Technologists, Psychologists, and Doctors dedicated to improving
          mental health and thinking ability.
        </p>
      </header>

      <div className="youtube-gallery-container">
        <div className="youtube-gallery-card">
          <h1 className="youtube-gallery-title">
            <span className="youtube-gallery-title-gradient">
              Captivating Video Showcase
            </span>
          </h1>
          <h2 className="youtube-gallery-subtitle">
            Explore our latest content and insights.
          </h2>
          <div className="youtube-gallery-grid">
            {videoIds.map((videoId, index) => (
              <div
                key={index}
                className="youtube-gallery-video-card"
              >
                <div className="youtube-gallery-iframe-wrapper">
                  <iframe
                    className="youtube-gallery-iframe"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={`YouTube video player ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>

          <div className="youtube-gallery-button-wrapper">
            {/* The button now links directly to the YouTube playlist. */}
            <a
              href={playlistUrl}
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Recommended for security when using target="_blank"
              className="youtube-gallery-button"
            >
              Go to YouTube Playlist
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default YouTubeGallery;
