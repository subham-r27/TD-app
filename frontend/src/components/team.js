import React from 'react';
import { Link } from 'react-router-dom';
import './team.css';

// Import images from src/assets
import harshImage from '../assets/harsh.jpg';
import bilalImage from '../assets/bilal.jpg';
import poonamImage from '../assets/poonam.jpg';
import subhamImage from '../assets/Subham.png';
import khwahishImage from '../assets/khwahish.jpg';
import priyankaImage from '../assets/priyanka.jpg';
import bhargavImage from '../assets/bhargav.jpg';
import shradhaImage from '../assets/ss.jpg';


const TeamMemberCard = ({ name, role, photo, link }) => (
  <article className="team-member-card">
    <img src={photo} alt={`Headshot for ${name}`} className="team-member-photo" />
    <div className="card-content">
      <h3 className="team-member-name">{name}</h3>
      <p className="team-member-role">{role}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="team-member-bio-link">
        More about {name.split(' ')[0]}
      </a>
    </div>
  </article>
);

const teamMembers = [
  { name: 'Harsh Tiwari', role: 'Founding Advisor', photo: harshImage, link: 'https://www.linkedin.com/in/harsh-thinkdriven/' },
  { name: 'Bilal Ahmed', role: 'Video Editor', photo: bilalImage, link: 'https://www.linkedin.com/in/bilal-ahmed-02b63a280' },
  { name: 'Poonam Jangid', role: 'Graphic Designer', photo: poonamImage, link: 'https://www.linkedin.com/in/poonam1919/' },
  { name: 'Subham Rout', role: 'Full Stack Developer', photo: subhamImage, link: 'https://www.linkedin.com/in/subham-rout-13603125b' },
  { name: 'Khwahish Pandey', role: 'Frontend Developer', photo: khwahishImage, link: 'https://www.linkedin.com/in/khwahish-pandey-827786330' },
  { name: 'Priyanka H C', role: 'Frontend Developer & Content Writer', photo: priyankaImage, link: 'https://www.linkedin.com/in/priyanka-h-c/' },
  { name: 'Bhargav M', role: 'Content Writer', photo: bhargavImage, link: 'https://www.linkedin.com/in/bhargav-m-6ba628358/' },
  { name: 'Shradha Jain N.B', role: 'Frontend Developer', photo: shradhaImage, link: 'https://www.linkedin.com/in/shradha-jain-n-b-32b785330/' },
];

const TeamPage = () => {
  return (
    <div className="page-wrapper">
      {/* Full-screen blue header section */}
      <header className="page-header">
        <h1>Meet Our Team</h1>
        <img
          src="https://cdn-icons-png.flaticon.com/128/3185/3185444.png"
          alt="team-icon"
          className="icons"
        />
        <p>
          A Collective of Proven Technologists, Psychologists, and Doctors dedicated to improving
          mental health and thinking ability.
        </p>
      </header>
      
      {/* Team cards section - no extra wrapper div */}
      <section className="team-section">
        <h2 className="section-title">Core Members</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default TeamPage;