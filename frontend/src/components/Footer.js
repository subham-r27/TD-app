import React from 'react';
import './Footer.css'; // Import the CSS file for the footer

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Contact Us Column */}
        <div className="footer-column">
          <h4 className="font-bold">Contact Us</h4>
          <ul>
            <li><img src="/icons/TDLogo.png" alt="TDLogo" className="footericon" /></li>
            <li>Bangalore, India</li>
            <li className="listss"><a href="mailto:hi@thinkdriven.in">hi@thinkdriven.in</a></li>
          </ul>
        </div>

        {/* Quick Links Column */}
        <div className="footer-column">
          <h4 className="font-bold">Quick Links</h4>
          <ul>
            <li className="listss"><a href="#">Our Story</a></li>
            <li className="listss"><a href="#">Team</a></li>
            <li className="listss"><a href="#">Portfolio</a></li>
            <li className="listss"><a href="https://www.youtube.com/@thinkdriven" target="_blank" rel="noopener noreferrer">Youtube</a></li>
            <li className="listss"><a href="https://thinkdrivenblogs.substack.com/" target="_blank" rel="noopener noreferrer">Blogs</a></li>
          </ul>
        </div>

        {/* Follow Us Column */}
        <div className="footer-column">
          <h4 className="font-bold">Follow Us</h4>
          <ul className="social-icons"> {/* Added a class for specific social icon styling */}
            <li><a href="https://thinkdrivenblogs.substack.com/" target="_blank" rel="noopener noreferrer"><img src="/icons/substack.webp" alt="substack" className="iconss" /></a></li>
            <li><a href="https://www.instagram.com/think.driven" target="_blank" rel="noopener noreferrer"><img src="/icons/instagram.png" alt="instagram" className="iconss" /></a></li>
            <li><a href="https://www.linkedin.com/company/thinkdriven/" target="_blank" rel="noopener noreferrer"><img src="/icons/linkedin.png" alt="linkedin" className="iconss" /></a></li>
            <li><a href="https://www.youtube.com/@thinkdriven" target="_blank" rel="noopener noreferrer"><img src="/icons/youtube.png" alt="youtube" className="iconss" /></a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="copyright-bar">
        <p>&copy; 2024 by Think Driven. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;