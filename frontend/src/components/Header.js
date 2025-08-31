/* header.js */

/* header.js */

import React from 'react';
import './header.css';


const Header = () => {
    return (
        <div className="header">

            <div className="video-background-wrapper">
                <video autoPlay loop muted>
                   <source src='/video/3326928-hd_1920_1080_24fps.mp4' type='video/mp4'></source>
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="content">
                <h1>THINK DRIVEN</h1>
                <a href="/blogs">Explore</a>
            </div>
        </div>
    );
};

export default Header; 