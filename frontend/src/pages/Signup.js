import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import './Signup.css';

function Signup() {
    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        const copySignupInfo = { ...signupInfo };
        copySignupInfo[name] = value;
        setSignupInfo(copySignupInfo);
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        const { name, email, password } = signupInfo;
        if (!name || !email || !password) {
            return handleError('name, email and password are required');
        }
        try {
            const response = await fetch("https://td-app-api.vercel.app/auth/signup", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signupInfo)
            });
            const result = await response.json();
            const { success, message, error } = result;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate('/login');
                }, 1000);
            } else if (error) {
                const details = error?.details?.[0]?.message || error.message || 'Something went wrong';
                handleError(details);
            } else {
                handleError(message);
            }
        } catch (err) {
            handleError(err.message);
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-background">
                <video autoPlay loop muted className="background-video">
                    <source src="/video/istockphoto-1609837216-640_adpp_is.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="video-overlay"></div>
            </div>
            
            <div className="signup-content">
                <div className="signup-card">
                    <div className="signup-header">
                        <img src="/icons/TDLogo.png" alt="Think Driven Logo" className="signup-logo" />
                        <h1 className="signup-title">Welcome to THINK DRIVEN</h1>
                        <h2 className="signup-subtitle">Create Your Account</h2>
                        <p className="signup-description">
                            Join our community dedicated to exploring the psychological impact of the brain
                        </p>
                    </div>
                    
                    <form onSubmit={handleSignup} className="signup-form">
                        <div className="form-group">
                            <label htmlFor='name' className="form-label">Full Name</label>
                            <input
                                onChange={handleChange}
                                type='text'
                                name='name'
                                id='name'
                                autoFocus
                                placeholder='Enter your full name...'
                                value={signupInfo.name}
                                className="form-input"
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor='email' className="form-label">Email Address</label>
                            <input
                                onChange={handleChange}
                                type='email'
                                name='email'
                                id='email'
                                placeholder='Enter your email...'
                                value={signupInfo.email}
                                className="form-input"
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor='password' className="form-label">Password</label>
                            <input
                                onChange={handleChange}
                                type='password'
                                name='password'
                                id='password'
                                placeholder='Create a strong password...'
                                value={signupInfo.password}
                                className="form-input"
                                required
                            />
                        </div>
                        
                        <button type='submit' className="btn-3d signup-button">
                            Create Account
                        </button>
                        
                        <div className="signup-footer">
                            <span className="signup-text">
                                Already have an account?{' '}
                                <Link to="/login" className="signup-link">Sign in</Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
}

export default Signup;
