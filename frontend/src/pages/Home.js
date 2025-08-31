import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';
import AdBody from '../components/AdBody';
import CarouselCards from '../components/CarouselCards';
import FAQSection from '../components/FAQSection';
import Header from '../components/Header';
import ReviewFormSection from '../components/ReviewFormSection';
import './Home.css';

function Home() {
    const [loggedInUser, setLoggedInUser] = useState('');
    
    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'))
    }, [])

    return (
        <div className="home-container">
            {/* User Welcome Section */}
            <div className="welcome-section">
                <div className="welcome-content">
                    <div className="welcome-text">
                        <h1 className="welcome-title">
                        <br></br>
                            Welcome back, <span className="user-name">{loggedInUser}</span>! 👋
                        </h1>
                        <p className="welcome-subtitle">
                            Explore our latest insights and resources for mental well-being
                        </p>
                    </div>
                </div>
            </div>

            {/* Think Driven Web Content */}
            <Header />
            <AdBody />
            <CarouselCards />
            <FAQSection />
            <ReviewFormSection />
            
            <ToastContainer />
        </div>
    )
}

export default Home
